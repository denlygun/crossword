import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { updateUserStats } from "../store/slices/usersSlice";
import { endGame } from "../store/slices/gameSlice";
import { useCrossword } from "../hooks/useCrossword";
import CrosswordGrid from "../components/CrosswordGrid";
import CluesList from "../components/CluesList";
import GameEndModal from "../components/GameEndModal";
import styles from "../styles/modules/GamePage.module.css";
import common from "../styles/modules/common.module.css";

const GamePage = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const settings = useAppSelector((state) => state.settings);

    const { grid, updateCell, reset, isLevelComplete, levelData } = useCrossword();

    const [timeLeft, setTimeLeft] = useState(settings.timer * 60);
    const [end, setEnd] = useState(false);
    const [win, setWin] = useState(false);
    const [startTime] = useState(Date.now());

    useEffect(() => {
        setTimeLeft(settings.timer * 60);
        setEnd(false);
        setWin(false);
    }, [settings.timer, settings.gridSize]);

    useEffect(() => {
        if (timeLeft <= 0 && !end) {
            setEnd(true);
            setWin(false);
            return;
        }

        if (end) return;

        const timer = setInterval(() => {
            setTimeLeft(t => t - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, end]);

    useEffect(() => {
        if (isLevelComplete() && timeLeft > 0 && !end) {
            setEnd(true);
            setWin(true);
        }
    }, [isLevelComplete, timeLeft, end]);

    const restart = () => {
        reset();
        setEnd(false);
        setWin(false);
        setTimeLeft(settings.timer * 60);
    };

    const handleModalClose = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);

        if (userId) {
            console.log("Saving stats:", { userId, win, timeSpent });
            dispatch(updateUserStats({ userId, win, time: timeSpent }));
            dispatch(endGame({ win, timeSpent, userId, gridSize: settings.gridSize }));
        }

        navigate(`/result/${userId}`, {
            state: { win, timeSpent }
        });
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className={styles.gamePage}>
            <div className={`${common.container} ${styles.container}`}>
                <header className={styles.gameHeader}>
                    <h1 className={styles.title}>Кросворд ({settings.gridSize} x {settings.gridSize})</h1>
                    {userId && <p className={styles.userBadge}>Гравець: {userId}</p>}
                </header>

                <div className={styles.gameInfo}>
                    <div className={styles.timer}>
                        Час: <span className={styles.timeValue}>{formatTime(timeLeft)}</span>
                    </div>
                </div>

                <div className={styles.gameContent}>
                    <div className={styles.cluesSection}>
                        <CluesList clues={levelData.words} />
                    </div>

                    <div className={styles.gridSection}>
                        <CrosswordGrid grid={grid} updateCell={updateCell} />
                    </div>
                </div>

                <div className={styles.gameActions}>
                    <button onClick={restart} className={`${common.btnSecondary}`}>
                        Перезапустити
                    </button>
                    <button
                        onClick={() => navigate(userId ? `/user/${userId}` : "/")}
                        className={`${common.btnSecondary}`}
                    >
                        Налаштування
                    </button>
                    <button
                        onClick={() => navigate('/results')}
                        className={`${common.btnOutline}`}
                    >
                        Таблиця
                    </button>
                </div>

                {end && (
                    <GameEndModal
                        win={win}
                        onRestart={handleModalClose}
                    />
                )}
            </div>
        </div>
    );
};

export default GamePage;