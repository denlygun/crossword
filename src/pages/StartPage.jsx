import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import { updateSettings, setCurrentUser } from "../store/slices/settingsSlice";
import { addUser } from "../store/slices/usersSlice";
import SettingsForm from "../components/SettingsForm";
import styles from "../styles/modules/StartPage.module.css";
import common from "../styles/modules/common.module.css";

const StartPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [userId, setUserId] = useState("");

    const handleStart = (values) => {
        dispatch(updateSettings(values));

        const finalUserId = userId || `user_${Date.now()}`;
        dispatch(setCurrentUser(finalUserId));
        dispatch(addUser({ userId: finalUserId }));

        navigate(`/game/${finalUserId}`);
    };

    const handleProfileNavigate = () => {
        if (userId) {
            dispatch(setCurrentUser(userId));
            dispatch(addUser({ userId }));
            navigate(`/profile/${userId}`);
        }
    };

    return (
        <div className={styles.startPage}>
            <div className={`${common.container} ${styles.container}`}>
                <header className={styles.pageHeader}>
                    <h1 className={styles.title}>Кросворд</h1>
                    <p className={styles.subtitle}>Розв'язуйте слова та розвивайте свій розум</p>
                </header>

                <div className={styles.userSection}>
                    <label htmlFor="userId" className={styles.userLabel}>
                        Ваш ID користувача (необов'язково):
                    </label>
                    <div className={styles.userInputGroup}>
                        <input
                            id="userId"
                            type="text"
                            placeholder="Введіть ваш ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className={styles.userInput}
                        />
                        {userId && (
                            <button
                                onClick={handleProfileNavigate}
                                className={styles.btnProfile}
                            >
                                Профіль
                            </button>
                        )}
                    </div>
                    {!userId && (
                        <p className={styles.userHint}>Залиште порожнім для автоматичного створення ID</p>
                    )}
                </div>

                <SettingsForm onSubmit={handleStart} />

                <div className={styles.additionalActions}>
                    <button
                        onClick={() => navigate('/results')}
                        className={`${common.btnResults}`}
                    >
                        Таблиця результатів
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartPage;