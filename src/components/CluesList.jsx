
import React from "react";
import styles from "../styles/modules/CluesList.module.css";
/**
 * Displays list of crossword clues.
 * @component
 * @param {Object} props
 * @param {string[]} props.clues - Array of clues
 * @returns {JSX.Element}
 */
const CluesList = ({ clues }) => {
    return (
        <div className={styles.cluesList}>
            <h3 className={styles.title}>Підказки:</h3>
            <div className={styles.cluesContainer}>
                {clues.map((c, i) => (
                    <div key={i} className={styles.clueItem}>
                        <span className={styles.clueNumber}>{i + 1}.</span>
                        <span className={styles.clueText}>{c.clue}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CluesList;