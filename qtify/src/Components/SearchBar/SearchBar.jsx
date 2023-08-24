import React from "react";
import styles from "./SearchBar.module.css";
import Searchicon from "../../assets/Searchicon.png";
const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <input
        value=''
        placeholder='Search a album of your choice'
        name=''
        id=''
        className={styles.searchbar}></input>

      <div className={styles.searchIcon}>
        <img src={Searchicon} alt='searchIcon' height='20px' width='20px'></img>
      </div>
    </div>
  );
};

export default SearchBar;
