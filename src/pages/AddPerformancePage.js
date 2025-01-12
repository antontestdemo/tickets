import React from "react";
import AddPerformanceForm from "../components/AddPerformance/AddPerformanceForm";
import { useSelector, useDispatch } from "react-redux";
import { addPerformance } from "../redux/slices/performanceSlice";
import styles from "./AddPerformancePage.module.css";

const AddPerformancePage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleAddPerformance = (performance) => {
    const newPerformance = { ...performance, userId: user.id };
    dispatch(addPerformance(newPerformance));
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Add Performance</h1>
      <AddPerformanceForm onAdd={handleAddPerformance} />
    </div>
  );
};

export default AddPerformancePage;
