import styles from "./MainCarouselCard.module.css";

function MainCarouselCard(props) {
  return (
    <>
      <div
        className={
          props.data.class === "desktop"
            ? styles.cardDesktop
            : styles.cardMobile
        }
      >
        <div className={styles.cardContainer}>
          <img src={props.data.icon} alt="CardIcon" />
          <div
            className={
              props.data.class === "desktop"
                ? styles.contentDesktop
                : styles.contentMobile
            }
          >
            {props.data.text}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCarouselCard;
