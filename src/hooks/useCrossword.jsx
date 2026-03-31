
import { useState, useEffect, useCallback } from "react";
import { useSettings } from "./useSettings";
import levels from "../data/levels";
/**
 * Hook for managing crossword logic.
 * @returns {Object}
 * @property {string[][]} grid
 * @property {function} updateCell
 */
const generateEmptyGrid = (size) => {
    return Array.from({ length: size }, () =>
        Array.from({ length: size }, () => "")
    );
};

export const useCrossword = () => {
    const { settings } = useSettings();
    const levelData = levels[settings.gridSize];

    const [grid, setGrid] = useState(() => generateEmptyGrid(settings.gridSize));
    const [foundWords, setFoundWords] = useState([]);

    useEffect(() => {
        setGrid(generateEmptyGrid(settings.gridSize));
        setFoundWords([]);
    }, [settings.gridSize]);

    const updateCell = useCallback((r, c, value) => {
        if (value.length > 1) return;

        setGrid(prev => {
            const g = prev.map(row => [...row]);
            g[r][c] = value.toUpperCase();
            return g;
        });
    }, []);

    const isLevelComplete = useCallback(() => {
        // Отримуємо всі букви зі слів
        const requiredLetters = levelData.words
            .map(w => w.word.toUpperCase())
            .join('')
            .split('')
            .sort()
            .join('');

        const gridLetters = grid
            .flat()
            .filter(cell => cell && cell.trim() !== '')
            .sort()
            .join('');

        return requiredLetters === gridLetters;
    }, [grid, levelData.words]);

    const reset = useCallback(() => {
        setGrid(generateEmptyGrid(settings.gridSize));
        setFoundWords([]);
    }, [settings.gridSize]);

    return {
        grid,
        updateCell,
        reset,
        isLevelComplete,
        levelData,
        foundWords
    };
};