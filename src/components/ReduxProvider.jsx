/**
 * Provides Redux store to the application.
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

const ReduxProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;