import React from "react";
import styles from "../styles/Cards.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className={styles.cards}>
        
      <Slider {...settings}>
      
        <div className={styles.card}>
          <h3>COVID-19</h3>
          <p>Реализация проектов в условиях пандемии</p>
          <div className={styles.break}></div>
        </div>
        
        <div className={styles.card}>
          <h3>Государственные премии</h3>
          <p>
            Государственная премия РФ и премия президента РФ для молодых ученых
          </p>
          <div className={styles.break}></div>
        </div>
        
        <div className={styles.card}>
          <h3>Президентская программа</h3>
          <p>Президентская программа исследовательских проектов</p>
          <div className={styles.break}></div>
        </div>
        <div className={styles.card}>
          <h3>Поддержано Фондом</h3>
          <p>Информация о поддержанных проектах и их результатах</p>
          <div className={styles.break}></div>
        </div>
      </Slider>
      
    </div>
  );
}

export default Cards;
