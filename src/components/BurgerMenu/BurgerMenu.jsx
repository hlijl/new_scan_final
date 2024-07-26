import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import store from "../../store/store.js";
import styles from "./BurgerMenu.module.css";
import NavBar from "../NavBar/NavBar.jsx";
import { authReset } from "../../utils/authReset.js";

function BurgerMenu() {
  const burgerRef = useRef(null);
  const navigate = useNavigate();
  const [menuStatus, setMenuStatus] = useState(store.getState().menuStatus);
  const [authStatus, setAuthStatus] = useState(
    localStorage.getItem("AuthStatus")
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setMenuStatus(store.getState().menuStatus);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function handleBurgerMenu() {
    store.dispatch({ type: "CHANGE_MENU_STATUS" });
    setMenuStatus(!menuStatus);
  }

  function enterHandler() {
    handleBurgerMenu();
    navigate("/auth");
  }

  function exitHandler() {
    authReset(setAuthStatus, navigate);
    handleBurgerMenu();
  }

  return (
    <>
      <div
        className={menuStatus ? styles.menuButtonOpened : styles.menuButton}
        onClick={handleBurgerMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        ref={burgerRef}
        className={
          menuStatus ? styles.mobileMenuVisible : styles.mobileMenuHidden
        }
      >
        <nav className={styles.navMobile}>
          <NavBar handler={handleBurgerMenu} />
        </nav>
        <div className={styles.mobileAuth}>
          <Link to={"#"} className={styles.mobileRegister}>
            Зарегистрироваться
          </Link>
          {authStatus === "false" ? (
            <button onClick={enterHandler} className={styles.mobileEnter}>
              Войти
            </button>
          ) : (
            <button onClick={exitHandler} className={styles.mobileEnter}>
              Выйти
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
