
import { createSlice } from '@reduxjs/toolkit';
/**
 * Redux slice for settings state.
 */
const loadSettingsFromStorage = () => {
    try {
        const saved = localStorage.getItem('crossword_settings');
        return saved ? JSON.parse(saved) : {
            gridSize: 3,
            timer: 1,
            currentUser: null
        };
    } catch (error) {
        console.error('Error loading settings:', error);
        return { gridSize: 3, timer: 1, currentUser: null };
    }
};

const saveSettingsToStorage = (settings) => {
    try {
        localStorage.setItem('crossword_settings', JSON.stringify(settings));
    } catch (error) {
        console.error('Error saving settings:', error);
    }
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState: loadSettingsFromStorage(),
    reducers: {
        updateSettings: (state, action) => {
            const newSettings = { ...state, ...action.payload };
            saveSettingsToStorage(newSettings);
            return newSettings;
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            saveSettingsToStorage(state);
        },
        resetSettings: () => {
            const defaultSettings = { gridSize: 3, timer: 1, currentUser: null };
            saveSettingsToStorage(defaultSettings);
            return defaultSettings;
        },
    },
});

export const { updateSettings, setCurrentUser, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;