import React, { useState } from "react";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  const [toggleTop, setToggleTop] = useState(false);

  return (
    <div>
      <div className={styles.header}>
        <h2>{title}</h2>
        <h2
          className={styles.toggleText}
          onClick={() => setToggleTop(!toggleTop)}>
          {!toggleTop ? "Show all" : "Collapse"}
        </h2>
      </div>
      {data.length ? (
        <div className={styles.cardWrapper}>
          {toggleTop ? (
            <div className={styles.wrapper}>
              {data.map((cardItem) => {
                return (
                  <Card cardItem={cardItem} type={type} key={cardItem.id} />
                );
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              renderCardComponent={(item) => {
                return <Card cardItem={item} type={type} key={item.id} />;
              }}
            />
          )}
        </div>
      ) : (
        <div className={styles.circularProgress}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Section;
