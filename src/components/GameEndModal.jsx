/**
 * Modal shown when game ends.
 * @component
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 * @returns {JSX.Element}
 */
import React from "react";
import ModalPortal from "./ModalPortal";
import styles from "../styles/modules/Modal.module.css";
import common from "../styles/modules/common.module.css";

const GameEndModal = ({ win, onRestart }) => {
    return (
        <ModalPortal>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <h2>{win ? "Рівень завершено!" : "Час вийшов!"}</h2>
                    <button className={`${common.btnPrimary} ${styles.modalButton}`} onClick={onRestart}>
                        Продовжити
                    </button>
                </div>
            </div>
        </ModalPortal>
    );
};

export default GameEndModal;