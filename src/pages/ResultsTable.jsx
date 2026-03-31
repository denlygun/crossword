/**
 * Table with previous game results.
 * @component
 * @returns {JSX.Element}
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';
import { selectSortedUsers, selectGameHistory } from '../store/selectors';
import styles from '../styles/modules/ResultsTable.module.css';
import common from '../styles/modules/common.module.css';

const ResultsTable = () => {
    const navigate = useNavigate();
    const sortedUsers = useAppSelector(selectSortedUsers);
    const gameHistory = useAppSelector(selectGameHistory);

    return (
        <div className={styles.resultsTablePage}>
            <div className={`${common.container} ${styles.container}`}>
                <header className={styles.pageHeader}>
                    <h1 className={styles.title}>Таблиця результатів</h1>
                </header>

                <div className={styles.resultsContent}>
                    <div className={styles.usersStats}>
                        <h2>Статистика гравців</h2>
                        <div className={styles.tableContainer}>
                            <table className={styles.statsTable}>
                                <thead>
                                <tr>
                                    <th>Гравець</th>
                                    <th>Ігор</th>
                                    <th>Перемог</th>
                                    <th>% Перемог</th>
                                    <th>Найкращий час</th>
                                </tr>
                                </thead>
                                <tbody>
                                {sortedUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td className={styles.userIdCell}>{user.id}</td>
                                        <td>{user.gamesPlayed}</td>
                                        <td>{user.gamesWon}</td>
                                        <td>
                                            {user.gamesPlayed > 0
                                                ? `${((user.gamesWon / user.gamesPlayed) * 100).toFixed(1)}%`
                                                : '0%'
                                            }
                                        </td>
                                        <td>{user.bestTime ? `${user.bestTime}с` : '---'}</td>
                                    </tr>
                                ))}
                                {sortedUsers.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className={styles.noData}>
                                            Немає даних про гравців
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={styles.backButton}>
                        <button
                            onClick={() => navigate('/')}
                            className={`${common.btnPrimary}`}
                        >
                            На головну
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsTable;