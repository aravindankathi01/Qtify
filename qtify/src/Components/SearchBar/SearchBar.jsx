import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import Searchicon from "../../assets/Searchicon.png";
const SearchBar = ({ data }) => {
  console.log("from seeah", data);
  const [searchvalue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    console.log("filtered", filteredData);
  }, [filteredData]);
  return (
    <div className={styles.mainWrapper}>
      <form className={styles.wrapper}>
        <input
          value={searchvalue}
          placeholder='Search a album of your choice'
          name=''
          id=''
          className={styles.searchbar}
          onChange={(e) => {
            setSearchValue(e.target.value);
            const res = data.filter((item) => {
              return item.title
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            });
            setFilteredData(res);
          }}></input>

        <button
          className={styles.searchIcon}
          onClick={(e) => {
            e.preventDefault();
          }}>
          <img
            src={Searchicon}
            alt='searchIcon'
            height='20px'
            width='20px'></img>
        </button>
      </form>
      {searchvalue && filteredData.length ? (
        <div className={styles.suggestionWrapper}>
          {filteredData.map((item) => {
            const { title, songs, image, follows } = { ...item };
            return (
              <div className={styles.suggestionItem}>
                <img
                  className={styles.suggestionImage}
                  src={image}
                  alt='albumImage'
                  width='66px'
                  height='71px'></img>
                <div className={styles.info}>
                  <div>
                    <h4>{title}</h4>
                    <p>{songs[0]?.artists.join(", ")}</p>
                  </div>
                  <p>{follows} Follows</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
