import React from "react";
import styles from "../styles/Heroes.module.scss";

function Heroes() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1>Спецпроект «Неизвестные герои науки»</h1>
      </div>
      <div className={styles.right}>
        <p>
          У них нет имен — только номера в лабораторном журнале За последние 100
          лет ни один прорыв в медицине не обошелся без их участия. Они спасли
          миллионы человеческих жизней. Скромные герои — лабораторные животные.
        </p>
        <button>Узнать о героях</button>
      </div>
    </div>
  );
}

export default Heroes;
