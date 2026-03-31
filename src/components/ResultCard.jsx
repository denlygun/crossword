/**
 * Displays result summary.
 * @component
 * @param {Object} props
 * @param {string} props.username
 * @param {number} props.score
 * @returns {JSX.Element}
 */
import React from "react";

const ResultCard = ({ text }) => (
    <div className="result-card">
        <p>{text}</p>
    </div>
);

export default ResultCard;
