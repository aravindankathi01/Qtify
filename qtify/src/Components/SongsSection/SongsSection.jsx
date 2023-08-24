import React, { useState } from "react";
import styles from "./SongsSection.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

const filterSongs = (data, type) => {
  const filtered = data.filter((item) => item.genre.key === type);
  console.log(filtered, type);
  return filtered;
};

const SongsSection = ({ title, data, type }) => {
  const [filterType, setFilterType] = useState("All");
  return (
    <div>
      <h2>{title}</h2>
      <div className={styles.header}>
        <h4 onClick={() => setFilterType("All")}>All</h4>
        <h4 onClick={() => setFilterType("rock")}>Rock</h4>
        <h4 onClick={() => setFilterType("pop")}>Pop</h4>
        <h4 onClick={() => setFilterType("jazz")}>Jazz</h4>
        <h4 onClick={() => setFilterType("blues")}>Blues</h4>
      </div>
      {data.length ? (
        <div className={styles.cardWrapper}>
          <Carousel
            data={filterType === "All" ? data : filterSongs(data, filterType)}
            renderCardComponent={(item) => {
              return <Card cardItem={item} type={type} key={item.id} />;
            }}
          />
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default SongsSection;
