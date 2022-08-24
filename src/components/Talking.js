import React from "react";
import styles from "../styles/Talking.module.scss";
import logo from "../assets/logo.png";

function Talking() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1>Спецпроект "Разговоры за жизнь" </h1>
      </div>
      <div className={styles.right}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <p>
          Совместный медиапроект Сколтеха и РНФ "Разговоры за жизнь"— это цикл
          интервью ученых о своей работе, пути в науке и поиске вдохновения.
        </p>
        <button>Подробнее</button>
      </div>
    </div>
  );
}

export default Talking;
