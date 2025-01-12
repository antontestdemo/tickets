import React, { useState } from "react";
import styles from "./PerformancesTable.module.css";

const PerformancesTable = ({ performances, onDelete }) => {
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'card'

  return (
    <div>
      <div className={styles.viewModeButtons}>
        <button onClick={() => setViewMode("table")} className={styles.button}>
          Table View
        </button>
        <button onClick={() => setViewMode("card")} className={styles.button}>
          Card View
        </button>
      </div>

      {viewMode === "table" ? (
        <table className={styles.tableView}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {performances.map((performance) => (
              <tr key={performance.id}>
                <td>{performance.title}</td>
                <td>{performance.date}</td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => onDelete(performance.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={styles.cardView}>
          {performances.map((performance) => (
            <div key={performance.id} className={styles.card}>
              <h3>{performance.title}</h3>
              <p>{performance.date}</p>
              <button
                className={styles.deleteButton}
                onClick={() => onDelete(performance.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PerformancesTable;
