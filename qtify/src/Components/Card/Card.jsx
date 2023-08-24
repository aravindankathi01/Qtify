import React from "react";
import styles from "./card.module.css";
import { Chip, Tooltip } from "@mui/material";
const Card = ({ cardItem, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { title, follows, image, songs } = cardItem;
        return (
          <Tooltip title={songs?.length + " songs"} placement='top' arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img
                  src={image}
                  alt='albumImage'
                  height='170px'
                  width='159px'></img>
                <div className={styles.banner}>
                  <Chip
                    className={styles.chip}
                    label={follows + " Follows"}
                    size='small'
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "songs": {
        const { likes, image, title } = cardItem;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img
                src={image}
                alt='albumImage'
                height='170px'
                width='159px'></img>
              <div className={styles.banner}>
                <Chip
                  className={styles.chip}
                  label={likes + " Likes"}
                  size='small'
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }

      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;
