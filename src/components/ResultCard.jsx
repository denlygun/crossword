
import React from "react";
/**
 * Displays result summary.
 * @component
 * @param {Object} props
 * @param {string} props.username
 * @param {number} props.score
 * @returns {JSX.Element}
 */
const ResultCard = ({ text }) => (
    <div className="result-card">
        <p>{text}</p>
    </div>
);

export default ResultCard;
