import React from 'react';
import styles from './ResultItem.module.css';
import cardImgPlaceholder from '../../assets/images/cardImgPlaceholder.svg';
import { parseDate } from '../../utils/parseDate';
import { parseXml } from '../../utils/parseXml';
import { ResultItemCategory } from './ResultItemCategory';

function ResultItem({ data }) {
  const {
    issueDate,
    source,
    title,
    attributes: { isAnnouncement, isDigest, isTechNews, wordCount },
    content,
    url,
  } = data;

  const imageUrl = data.imageUrl || cardImgPlaceholder; // Use a placeholder if imageUrl is not provided.

  return (
    <li className={styles.resultItem}>
      <div className={styles.cardHeader}>
        <div className={styles.sourceBlock}>
          <span className={styles.date}>{parseDate(issueDate)}</span>
          <span className={styles.source}>{source.name}</span>
        </div>
        <h1 className={styles.cardTitle}>{title.text}</h1>
        <ResultItemCategory
          isAnnouncement={isAnnouncement}
          isDigest={isDigest}
          isTechNews={isTechNews}
        />
      </div>
      <div>
        <img src={imageUrl} alt="cardBanner" />
      </div>
      <div className={styles.cardText}>{parseXml(content.markup)}</div>
      <div className={styles.cardFooter}>
        <a className={styles.readMore} href={url === '' ? '/notFound' : url} target="_blank">
          Читать в источнике
        </a>
        <div className={styles.wordCount}>{wordCount} слова</div>
      </div>
    </li>
  );
}

export { ResultItem };
