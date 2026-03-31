
import React from "react";
/**
 * Reusable button component.
 * @component
 * @param {Object} props
 * @param {string} props.label - Button text
 * @param {function} [props.onClick] - Click handler
 * @returns {JSX.Element}
 */
const Button = ({ text, onClick }) => (
    <button className="btn" onClick={onClick}>
        {text}
    </button>
);

export default Button;
