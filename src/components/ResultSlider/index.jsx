import React, { useRef } from 'react';
import styles from './ResultSlider.module.css';
import chevron from '../../assets/images/chevron.png';
import { mapArrFunc } from '../../utils/mapArrFunc';
import { GeneralResultLoader } from '../GeneralResultLoader';

function ResultSlider({ data, isLoading }) {
  const dataListRef = useRef(null);
  const mappingData = mapArrFunc(data);

  const scrollChange = window.innerWidth <= 600 ? 298 : 133;

  const slideLeft = () => {
    dataListRef.current.scrollLeft -= scrollChange;
  };

  const slideRight = () => {
    dataListRef.current.scrollLeft += scrollChange;
  };

  return (
    <div className={styles.resultSlider}>
      <button onClick={slideLeft} className={`${styles.controller} ${styles.controllerLeft}`} type="button">
        <img src={chevron} alt="Chevron Left" />
      </button>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div>Период</div>
          <div>Всего</div>
          <div>Риски</div>
        </div>
        <ul ref={dataListRef} className={styles.dataList}>
          {isLoading ? (
            <GeneralResultLoader />
          ) : (
            mappingData.map(({ date, totalValue, riskValue }, index) => (
              <li key={index} className={styles.dataItem}>
                <div>{date}</div>
                <div>{totalValue}</div>
                <div>{riskValue}</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <button onClick={slideRight} className={`${styles.controller} ${styles.controllerRight}`} type="button">
        <img src={chevron} alt="Chevron Right" />
      </button>
    </div>
  );
}

export { ResultSlider };
