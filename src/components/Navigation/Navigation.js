import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Login
      </NavLink>
      <NavLink
        to="/performances"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Performances
      </NavLink>
      <NavLink
        to="/add-performance"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Add Performance
      </NavLink>
    </nav>
  );
};

export default Navigation;
