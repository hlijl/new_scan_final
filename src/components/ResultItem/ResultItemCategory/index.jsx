import styles from './ResultItemCategory.module.css';

export function ResultItemCategory({ isAnnouncement, isDigest, isTechNews }) {
  return (
    <ul className={styles.cardCategories}>
      {isAnnouncement && <li className={styles.cardCategory} key="announcement">Анонсы и события</li>}
      {isDigest && <li className={styles.cardCategory} key="digest">Новости</li>}
      {isTechNews && <li className={styles.cardCategory} key="techNews">Технические новости</li>}
    </ul>
  );
}
