import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <nav className={styles.wrapper}>
      <Logo />
      <SearchBar />
      <Button children='Give Feedback' />
    </nav>
  );
};

export default NavBar;
