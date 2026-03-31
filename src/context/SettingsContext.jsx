/**
 * Context for managing application settings.
 */
import React, { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem("crossword_settings");
        return saved ? JSON.parse(saved) : {
            gridSize: 3,
            timer: 1,
            currentUser: null
        };
    });

    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem("crossword_users");
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem("crossword_settings", JSON.stringify(settings));
    }, [settings]);

    useEffect(() => {
        localStorage.setItem("crossword_users", JSON.stringify(users));
    }, [users]);

    const updateSettings = (newSettings) => {
        setSettings(prev => ({ ...prev, ...newSettings }));
    };

    const setCurrentUser = (userId) => {
        if (settings.currentUser !== userId) {
            setSettings(prev => ({ ...prev, currentUser: userId }));

            if (userId && !users[userId]) {
                setUsers(prev => ({
                    ...prev,
                    [userId]: {
                        id: userId,
                        gamesPlayed: 0,
                        gamesWon: 0,
                        bestTime: null,
                        createdAt: new Date().toISOString()
                    }
                }));
            }
        }
    };

    const updateUserStats = (userId, win, time) => {
        if (!userId) return;

        setUsers(prev => {
            const user = prev[userId] || {
                gamesPlayed: 0,
                gamesWon: 0,
                bestTime: null,
                createdAt: new Date().toISOString()
            };
            const updatedUser = {
                ...user,
                gamesPlayed: user.gamesPlayed + 1,
                gamesWon: win ? user.gamesWon + 1 : user.gamesWon,
                bestTime: !user.bestTime || time < user.bestTime ? time : user.bestTime
            };

            return {
                ...prev,
                [userId]: updatedUser
            };
        });
    };

    return (
        <SettingsContext.Provider value={{
            settings,
            updateSettings,
            users,
            setCurrentUser,
            updateUserStats
        }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => useContext(SettingsContext);