import React from "react";

const Button = ({ text, onClick }) => (
    <button className="btn" onClick={onClick}>
        {text}
    </button>
);

export default Button;
