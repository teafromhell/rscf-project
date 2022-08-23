import React from "react";
import styles from "../styles/Articles.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { listOfArticles } from "../data/data";

function Articles() {
  return (
    <div className={styles.form}>
      {listOfArticles.map((item, index) => {
        return (
          <div className={styles.article} key={index}>
            <div className={styles.img_wrapper}><img src={item.img} alt={item.img} /></div>
            <p className={styles.article_date}>{item.date}</p>
            <h3>{item.title}</h3>
            <p className={styles.article_text}>{item.text}</p>
            <div className={styles.article_bottom}>
              <h5>{item.tag}</h5>
              <div className={styles.news_header_right}>
                <p>Читать</p>
                <HiOutlineArrowNarrowRight
                  className={styles.news_arrow}
                  size={20}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className={styles.article}>
        <img src={acid} alt="acid" />
        <p>22 августа, 2022</p>
        <h2>
          Ученые разработали новый безопасный источник азотистоводородной
          кислоты
        </h2>
        <p>
          Российские ученые предложили способ синтеза нового, стабильного и
          невзрывоопасного источника
        </p>
        <div>
          <h5>Химия и материалы</h5>
          <div className={styles.news_header_right}>
            <p>Читать</p>
            <HiOutlineArrowNarrowRight
              className={styles.news_arrow}
              size={20}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Articles;
