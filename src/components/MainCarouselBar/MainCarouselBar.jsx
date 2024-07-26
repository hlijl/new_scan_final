import React, { useState, useEffect } from "react";
import styles from "./MainCarouselBar.module.css";
import MainCarouselCard from "../MainCarouselCard/MainCarouselCard.jsx";
import Left from "../../assets/images/Icon-left.svg";
import Right from "../../assets/images/Icon-right.svg";
import { ADVERTBLOCK } from "../../utils/constants";

function MainCarouselBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [myAdvertData, setMyAdvertData] = useState(
    ADVERTBLOCK.slice(currentIndex, currentIndex + 3)
  );

  function handleLeft() {
    const updatedData = [...myAdvertData];
    const temp = updatedData.shift();
    updatedData.push(temp);
    setMyAdvertData(updatedData);
  }

  function handleRight() {
    const updatedData = [...myAdvertData];
    const temp = updatedData.pop();
    updatedData.unshift(temp);
    setMyAdvertData(updatedData);
  }

  useEffect(() => {
    setCurrentIndex(currentIndex);
  }, [currentIndex]);

  return (
    <>
      <div className={styles.carouselBar}>
        <button onClick={handleLeft} className={styles.button}>
          <img src={Left} alt="Left" />
        </button>
        <div className={styles.carouselDesktopContainer}>
          {myAdvertData.map((elem) => (
            <div key={elem.id} className={styles.cardDesktop}>
              <MainCarouselCard
                data={{
                  icon: elem.icon,
                  text: elem.text,
                  class: "desktop",
                }}
              />
            </div>
          ))}
        </div>
        <div className={styles.carouselMobileContainer}>
          <MainCarouselCard
            data={{
              icon: myAdvertData[currentIndex].icon,
              text: myAdvertData[currentIndex].text,
              class: "mobile",
            }}
          />
        </div>
        <button onClick={handleRight} className={styles.button}>
          <img src={Right} alt="Right" />
        </button>
      </div>
    </>
  );
}

export default MainCarouselBar;
