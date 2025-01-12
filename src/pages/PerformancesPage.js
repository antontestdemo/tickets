import React, { useEffect } from "react";
import PerformancesTable from "../components/Performances/PerformancesTable";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPerformances,
  deletePerformance,
} from "../redux/slices/performanceSlice";
import styles from "./PerformancesPage.module.css";

const PerformancesPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { items: performances, loading } = useSelector(
    (state) => state.performances
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchPerformances(user.id));
    }
  }, [dispatch, user]);

  const handleDelete = (id) => {
    dispatch(deletePerformance(id));
  };

  if (loading) {
    return <p>Loading performances...</p>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Performances</h1>
      <PerformancesTable performances={performances} onDelete={handleDelete} />
    </div>
  );
};

export default PerformancesPage;
