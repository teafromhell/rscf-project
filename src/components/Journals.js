import React, { useState } from "react";
import styles from "../styles/Journals.module.scss";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { listOfJournos } from "../data/data";

import book from "../assets/book.svg";

function Journals() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== listOfJournos.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === listOfJournos.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(listOfJournos.length);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Дайджесты</h1>
        <div className={styles.header_right}>
          <p>Все дайджесты</p>
          <HiOutlineArrowNarrowRight className={styles.arrow} size={20} />
        </div>
      </div>

      <div className={styles.wrapper_car}>
        <div className={styles.car}>
          {listOfJournos.map((item, index) => {
            return (
              <div
                className={`${styles.single_journo}
               ${slideIndex === index + 1 ? styles.active : ""}`}
                key={index}
              >
                <p>{item.title}</p>
                <img src={item.img} alt={item.img} />
              </div>
            );
          })}
          <HiOutlineArrowNarrowLeft
            size={25}
            className={styles.arrow_left}
            onClick={prevSlide}
          />
          <HiOutlineArrowNarrowRight
            size={25}
            className={styles.arrow_right}
            onClick={nextSlide}
          />
        </div>
        <div className={styles.right}>
          <img src={book} alt={book} />
          <h3>Дайджесты новостей Российского научного фонда</h3>
          <p>
            В сборники попадают лучшие результаты грантополучателей и знаковые
            события Фонда, освещенные в СМИ. Дайджесты выпускаются несколько раз
            в год.
          </p>

          <p>Следите за обновлениями.</p>

          <button>Читать дайджест</button>
        </div>
      </div>
    </div>
  );
}

export default Journals;
