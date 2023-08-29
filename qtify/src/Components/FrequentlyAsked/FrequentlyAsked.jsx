import React, { useEffect, useState } from "react";
import styles from "./FrequentlyAsked.module.css";
import upArrow from "../../assets/upArrow.png";
import downArrow from "../../assets/downArrow.png";
import fetchApi from "../../api/api";

const FrequentlyAsked = () => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    generateFAQData();
  }, []);

  const generateFAQData = async () => {
    const data = await fetchApi("/faq");
    setFaqData(data);
    // console.log("TopAlbums>>>>", data);
  };

  const FAQ_DATA = [
    {
      question: "Is QTify free to use?",
      answer: "Yes! It is 100% free, and has 0% ads!",
    },
    {
      question: "Can I download and listen to songs offline?",
      answer:
        "Sorry, unfortunately we don't provide the service to download any songs.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>FAQs</h1>
      </div>
      {faqData &&
        faqData.data.map((item, index) => {
          return (
            <div className={styles.faqWrapper} key={index}>
              <div
                className={styles.faqItem}
                onClick={() => {
                  if (index === displayIndex) {
                    setDisplayIndex(null);
                  } else {
                    setDisplayIndex(index);
                  }
                }}>
                <p className={styles.QnA}>{item.question}</p>
                {displayIndex !== index ? (
                  <img
                    src={downArrow}
                    alt='up and down arrow'
                    height='25px'
                    width='30px'></img>
                ) : (
                  <img
                    src={upArrow}
                    alt='up and down arrow'
                    height='25px'
                    width='30px'></img>
                )}
              </div>
              {displayIndex === index && (
                <p className={styles.answer}>{item.answer}</p>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default FrequentlyAsked;
