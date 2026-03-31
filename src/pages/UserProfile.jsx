
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSettings } from "../hooks/useSettings";
import styles from "../styles/modules/ProfilePage.module.css";
import common from "../styles/modules/common.module.css";
/**
 * User profile page.
 * Displays user statistics and info.
 * @component
 * @returns {JSX.Element}
 */
const UserProfile = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const { setCurrentUser, users } = useSettings();

    useEffect(() => {
        if (userId) {
            setCurrentUser(userId);
        }
    }, [userId]);

    const user = users[userId];

    if (!user) {
        return (
            <div className={styles.profilePage}>
                <div className={`${common.container}`}>
                    <h1>Користувач не знайдений</h1>
                    <button
                        className={`${common.btnPrimary}`}
                        onClick={() => navigate("/")}
                    >
                        На головну
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.profilePage}>
            <div className={`${common.container} ${styles.container}`}>
                <header className={styles.profileHeader}>
                    <h1>Профіль гравця</h1>
                    <p className={styles.userId}>ID: {userId}</p>
                </header>

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h3>Зіграно ігор</h3>
                        <p className={styles.statNumber}>{user.gamesPlayed}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Перемог</h3>
                        <p className={styles.statNumber}>{user.gamesWon}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Коефіцієнт перемог</h3>
                        <p className={styles.statNumber}>
                            {user.gamesPlayed > 0
                                ? `${((user.gamesWon / user.gamesPlayed) * 100).toFixed(1)}%`
                                : '0%'
                            }
                        </p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Найкращий час</h3>
                        <p className={styles.statNumber}>
                            {user.bestTime ? `${user.bestTime}с` : '---'}
                        </p>
                    </div>
                </div>

                <div className={styles.profileActions}>
                    <button
                        className={`${common.btnPrimary}`}
                        onClick={() => navigate(`/user/${userId}`)}
                    >
                        Грати
                    </button>
                    <button
                        className={`${common.btnSecondary}`}
                        onClick={() => navigate("/")}
                    >
                        На головну
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;