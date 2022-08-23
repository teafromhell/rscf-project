import React from "react";
import styles from "../styles/Press.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { listOfRel } from "../data/data";

function Press() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Пресс-релизы</h1>
        <div className={styles.header_right}>
          <p>Все пресс-релизы</p>
          <HiOutlineArrowNarrowRight className={styles.arrow} size={20} />
        </div>
      </div>
      <div className={styles.grid_form}>
        {listOfRel.map((item, index) => {
          return (
            <div className={styles.single_press} key={index}>
              <h3>{item.text}</h3>
              <HiOutlineArrowNarrowRight className={styles.arrow} size={20} />
            </div>
          );
        })}
      </div>
      <div className={styles.btn_wrapper}>
      <button className={styles.btn_press}>Стать героем публикации</button>
      </div>
      
    </div>
  );
}

export default Press;
