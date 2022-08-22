import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from "../styles/News.module.scss";

function News() {
  return (
    <div>
      <div className={styles.news_header}>
        <h1>Новости</h1>
        <div className={styles.news_header_right}>
          <p>Все новости</p>
          <HiOutlineArrowNarrowRight className={styles.news_arrow} size={20} />
        </div>
      </div>
    </div>
  );
}

export default News;
