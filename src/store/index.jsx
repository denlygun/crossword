import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsSlice';
import usersReducer from './slices/usersSlice';
import gameReducer from './slices/gameSlice';

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        users: usersReducer,
        game: gameReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['users/addUser', 'settings/updateSettings'],
                ignoredPaths: ['users.createdAt'],
            },
        }),
});

export default store;