import React from "react";
import styles from "../styles/Arch.module.scss";

function Arch() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1>Спецпроект «Архитектура российской науки» </h1>
      </div>
      <div className={styles.right}>
        <p>
          «Архитектура российской науки» - это проект о науке и архитектуре,
          онлайн-путеводитель по историческим эпохам и архитектурным стилям
          зданий, в которых располагаются научные и образовательные организации
          России.
        </p>
        <button>Подробнее</button>
      </div>
    </div>
  );
}

export default Arch;
