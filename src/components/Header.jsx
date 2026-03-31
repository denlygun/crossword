
import React from "react";
/**
 * Application header component.
 * @component
 * @returns {JSX.Element}
 */
const Header = ({ title }) => (
    <header className="header">
        <h1>{title}</h1>
    </header>
);

export default Header;
