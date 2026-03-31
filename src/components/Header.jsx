/**
 * Application header component.
 * @component
 * @returns {JSX.Element}
 */
import React from "react";

const Header = ({ title }) => (
    <header className="header">
        <h1>{title}</h1>
    </header>
);

export default Header;
