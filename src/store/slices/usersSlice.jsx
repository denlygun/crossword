import { createSlice } from '@reduxjs/toolkit';

const loadUsersFromStorage = () => {
    try {
        const saved = localStorage.getItem('crossword_users');
        return saved ? JSON.parse(saved) : {};
    } catch (error) {
        console.error('Error loading users:', error);
        return {};
    }
};

const saveUsersToStorage = (users) => {
    try {
        localStorage.setItem('crossword_users', JSON.stringify(users));
    } catch (error) {
        console.error('Error saving users:', error);
    }
};

const usersSlice = createSlice({
    name: 'users',
    initialState: loadUsersFromStorage(),
    reducers: {
        addUser: (state, action) => {
            const { userId } = action.payload;
            if (!state[userId]) {
                state[userId] = {
                    id: userId,
                    gamesPlayed: 0,
                    gamesWon: 0,
                    bestTime: null,
                    createdAt: new Date().toISOString(),
                };
                saveUsersToStorage(state);
                console.log('User added:', userId);
            }
        },
        updateUserStats: (state, action) => {
            const { userId, win, time } = action.payload;

            if (!state[userId]) {
                state[userId] = {
                    id: userId,
                    gamesPlayed: 0,
                    gamesWon: 0,
                    bestTime: null,
                    createdAt: new Date().toISOString(),
                };
            }

            const user = state[userId];
            user.gamesPlayed += 1;

            if (win) {
                user.gamesWon += 1;
            }

            if (!user.bestTime || (win && time < user.bestTime)) {
                user.bestTime = time;
            }

            console.log('User stats updated:', userId, {
                gamesPlayed: user.gamesPlayed,
                gamesWon: user.gamesWon,
                bestTime: user.bestTime,
            });

            saveUsersToStorage(state);
        },
        resetUsers: () => {
            saveUsersToStorage({});
            return {};
        },
    },
});

export const { addUser, updateUserStats, resetUsers } = usersSlice.actions;
export default usersSlice.reducer;