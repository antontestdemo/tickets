import React, { useState } from "react";
import styles from "./AddPerformanceForm.module.css";

const AddPerformanceForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) {
      setError("All fields are required");
      return;
    }
    setError("");
    onAdd({ title, date });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Title:</label>
        <input
          type="text"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Date:</label>
        <input
          type="date"
          className={styles.input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.button} type="submit">
        Add Performance
      </button>
    </form>
  );
};

export default AddPerformanceForm;
