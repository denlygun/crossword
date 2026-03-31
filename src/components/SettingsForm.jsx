/**
 * Form for changing game settings.
 * @component
 * @param {Object} props
 * @param {function} props.onSubmit
 * @returns {JSX.Element}
 */
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "../styles/modules/SettingsForm.module.css";
import common from "../styles/modules/common.module.css";

const schema = Yup.object().shape({
    gridSize: Yup.number().oneOf([3, 4, 5]).required(),
    timer: Yup.number().oneOf([1, 3, 5]).required(),
});

const SettingsForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{
                gridSize: 3,
                timer: 1,
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form className={styles.settingsForm}>
                    <h3>Налаштування гри</h3>

                    <label>Розмір сітки:</label>
                    <Field as="select" name="gridSize" className={styles.select}>
                        <option value={3}>3 x 3</option>
                        <option value={4}>4 x 4</option>
                        <option value={5}>5 x 5</option>
                    </Field>
                    {errors.gridSize && touched.gridSize && (
                        <p className={styles.error}>{errors.gridSize}</p>
                    )}

                    <label>Таймер (хвилини):</label>
                    <Field as="select" name="timer" className={styles.select}>
                        <option value={1}>1 хв</option>
                        <option value={3}>3 хв</option>
                        <option value={5}>5 хв</option>
                    </Field>
                    {errors.timer && touched.timer && (
                        <p className={styles.error}>{errors.timer}</p>
                    )}

                    <button type="submit" className={`${common.btnPrimary} ${styles.submitButton}`}>
                        Почати гру
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SettingsForm;