import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import { fetchPerformances } from "../redux/slices/performanceSlice";
import AuthForm from "../components/Auth/AuthForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogin = async (data) => {
    try {
      const user = await dispatch(login(data)).unwrap();
      dispatch(fetchPerformances(user.id)); // Загружаем спектакли текущего пользователя
      navigate("/performances"); // Перенаправление на страницу спектаклей
    } catch (error) {
      alert(error.message);
    }
  };

  if (user) {
    navigate("/performances"); // Если пользователь уже залогинен, перенаправляем
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Login</h1>
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
