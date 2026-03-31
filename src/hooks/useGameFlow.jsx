/**
 * Hook controlling game lifecycle.
 * @returns {Object}
 * @property {boolean} isGameOver
 * @property {function} startGame
 * @property {function} endGame
 */
import { useState } from "react";

export function useGameFlow() {
    const [page, setPage] = useState("start");

    const startGame = () => setPage("game");
    const finishGame = () => setPage("result");
    const restartGame = () => setPage("start");

    return {
        page,
        startGame,
        finishGame,
        restartGame
    };
}
