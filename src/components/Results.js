import React, { useState } from "react";
import styles from "../styles/Results.module.scss";
import { listOfResults } from "../data/data";

function Results() {
  //const [active, setActive] = useState(true);
  const [arr, setArr] = useState(listOfResults);
  const toggleHandler = (id) => {
    setArr(
      arr.map((item) => {
        if (item.id === id) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      })
    );
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.header}>
          <h1> Результаты 2021</h1>
        </div>
        <ul className={styles.ul}>
          {arr.map((item) => {
            return (
              <li
                key={item.id}
                className={`${item.active ? styles.active : ""} ${
                  styles.li_result
                }`}
                onClick={() => toggleHandler(item.id)}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {arr.map((item) => {
          return (
            <div className={styles.right_result}>
              <h1
                className={`${item.active ? styles.active_count : ""} ${
                  styles.count
                }`}
              >
                {item.count}
              </h1>
              <h2
                className={`${item.active ? styles.active_count : ""} ${
                  styles.count
                }`}
              >
                {item.text}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
