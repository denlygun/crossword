
import React from "react";
import styles from "../styles/modules/CrosswordGrid.module.css";
/**
 * Renders crossword grid.
 * @component
 * @param {Object} props
 * @param {string[][]} props.grid - Crossword matrix
 * @param {function} props.onChange - Cell change handler
 * @returns {JSX.Element}
 */
const CrosswordGrid = ({ grid, updateCell }) => {
    return (
        <div className={styles.crosswordGrid}>
            {grid.map((row, r) => (
                <div key={r} className={styles.row}>
                    {row.map((cell, c) => (
                        <input
                            key={`${r}-${c}`}
                            className={styles.cell}
                            maxLength={1}
                            value={cell}
                            onChange={(e) => updateCell(r, c, e.target.value)}
                            placeholder=""
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CrosswordGrid;