export const selectSettings = (state) => state.settings;
export const selectUsers = (state) => state.users;
export const selectGameState = (state) => state.game;
export const selectCurrentUser = (state) => state.settings.currentUser;
export const selectUserById = (userId) => (state) => state.users[userId];
export const selectGameHistory = (state) => state.game.gameHistory;
export const selectSortedUsers = (state) => {
    const users = Object.values(state.users);
    return users.sort((a, b) => {
        const winRateA = a.gamesPlayed > 0 ? a.gamesWon / a.gamesPlayed : 0;
        const winRateB = b.gamesPlayed > 0 ? b.gamesWon / b.gamesPlayed : 0;
        return winRateB - winRateA;
    });
};