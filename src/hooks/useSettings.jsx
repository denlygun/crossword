/**
 * Hook for accessing and updating settings.
 * @returns {Object}
 */
import { useAppDispatch, useAppSelector } from './reduxHooks';
import {
    updateSettings,
    setCurrentUser
} from '../store/slices/settingsSlice';
import {
    addUser,
    updateUserStats
} from '../store/slices/usersSlice';

export const useSettings = () => {
    const dispatch = useAppDispatch();
    const settings = useAppSelector((state) => state.settings);
    const users = useAppSelector((state) => state.users);

    const getUserById = (userId) => {
        return users[userId] || null;
    };

    return {
        settings,
        users,
        updateSettings: (newSettings) => dispatch(updateSettings(newSettings)),
        setCurrentUser: (userId) => {
            dispatch(setCurrentUser(userId));
            if (userId && !users[userId]) {
                dispatch(addUser({ userId }));
            }
        },
        updateUserStats: (userId, win, time) =>
            dispatch(updateUserStats({ userId, win, time })),
        getUserById,
    };
};