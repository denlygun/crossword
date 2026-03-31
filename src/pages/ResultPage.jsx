/**
 * Page displaying final game results.
 * @component
 * @returns {JSX.Element}
 */
import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSettings } from "../hooks/useSettings";
import styles from "../styles/modules/ResultPage.module.css";
import common from "../styles/modules/common.module.css";

const ResultPage = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { settings, users } = useSettings();

    const { win, timeSpent } = location.state || {};
    const user = users[userId];

    return (
        <div className={styles.resultPage}>
            <div className={`${common.container} ${styles.container}`}>
                <div className={`${styles.resultCard} ${win ? styles.win : styles.lose}`}>
                    <div className={styles.resultIcon}>
                        {win ? '' : ''}
                    </div>

                    <h1>{win ? 'Вітаємо з перемогою!' : 'Час вийшов!'}</h1>

                    <div className={styles.resultDetails}>
                        <p><strong>Розмір сітки:</strong> {settings.gridSize} x {settings.gridSize}</p>
                        <p><strong>Час гри:</strong> {timeSpent} секунд</p>
                        {user && (
                            <>
                                <p><strong>Зіграно ігор:</strong> {user.gamesPlayed}</p>
                                <p><strong>Перемог:</strong> {user.gamesWon}</p>
                            </>
                        )}
                    </div>

                    <div className={styles.resultActions}>
                        <button
                            onClick={() => navigate(userId ? `/game/${userId}` : "/")}
                            className={`${common.btnPrimary}`}
                        >
                            Грати знову
                        </button>
                        <button
                            onClick={() => navigate(userId ? `/user/${userId}` : "/")}
                            className={`${common.btnSecondary}`}
                        >
                            Нові налаштування
                        </button>
                        {userId && (
                            <button
                                onClick={() => navigate(`/profile/${userId}`)}
                                className={`${common.btnOutline}`}
                            >
                                Мій профіль
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;