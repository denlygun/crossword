import { createSlice } from '@reduxjs/toolkit';

const loadGameHistoryFromStorage = () => {
    try {
        const saved = localStorage.getItem('crossword_game_history');
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error('Error loading game history:', error);
        return [];
    }
};

const saveGameHistoryToStorage = (history) => {
    try {
        localStorage.setItem('crossword_game_history', JSON.stringify(history));
    } catch (error) {
        console.error('Error saving game history:', error);
    }
};

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        currentGame: null,
        gameHistory: loadGameHistoryFromStorage(),
        isGameActive: false,
    },
    reducers: {
        startGame: (state, action) => {
            state.currentGame = {
                id: Date.now(),
                startTime: new Date().toISOString(),
                settings: action.payload.settings,
                userId: action.payload.userId,
                completed: false,
            };
            state.isGameActive = true;
        },
        endGame: (state, action) => {
            if (state.currentGame) {
                const gameResult = {
                    ...state.currentGame,
                    endTime: new Date().toISOString(),
                    win: action.payload.win,
                    timeSpent: action.payload.timeSpent,
                    gridSize: action.payload.gridSize,
                    userId: action.payload.userId,
                };

                state.gameHistory.push(gameResult);
                console.log('Game saved to history:', gameResult);

                saveGameHistoryToStorage(state.gameHistory);

                state.currentGame = null;
                state.isGameActive = false;
            } else {
                const gameResult = {
                    id: Date.now(),
                    startTime: new Date(Date.now() - action.payload.timeSpent * 1000).toISOString(),
                    endTime: new Date().toISOString(),
                    win: action.payload.win,
                    timeSpent: action.payload.timeSpent,
                    gridSize: action.payload.gridSize,
                    userId: action.payload.userId,
                    settings: { gridSize: action.payload.gridSize },
                };

                state.gameHistory.push(gameResult);
                console.log('Game saved without currentGame:', gameResult);
                saveGameHistoryToStorage(state.gameHistory);
            }
        },
        resetGame: (state) => {
            state.currentGame = null;
            state.isGameActive = false;
        },
    },
});

export const { startGame, endGame, resetGame } = gameSlice.actions;
export default gameSlice.reducer;