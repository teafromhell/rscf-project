import React from "react";
import "../styles/Cards.scss";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import {
//   HiOutlineArrowNarrowRight,
//   HiOutlineArrowNarrowLeft,
// } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
// import { Navigation } from "swiper";

function Cards() {
  // const settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,

  //     responsive: [
  //         {
  //           breakpoint: 1024,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 3,
  //             infinite: true,
  //             dots: true
  //           }
  //         },
  //         {
  //           breakpoint: 600,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 2,
  //             initialSlide: 2
  //           }
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1
  //           }
  //         }
  //       ]
  //   };
  return (
    <>
      {/* <HiOutlineArrowNarrowLeft />
      <HiOutlineArrowNarrowRight /> */}
      <div className="cards">
        {/* <Slider {...settings}> */}
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          spaceBetween={60}
          slidesPerView={1}
          slidesPerGroup={1}
          className="mySwiper"
        >
          <SwiperSlide className="card">
            <h3>COVID-19</h3>
            <p>Реализация проектов в условиях пандемии</p>
            <div className="break"></div>
          </SwiperSlide>

          <SwiperSlide className="card">
            <h3>Государственные премии</h3>
            <p>
              Государственная премия РФ и премия президента РФ для молодых
              ученых
            </p>
            <div className="break"></div>
          </SwiperSlide>

          <SwiperSlide className="card">
            <h3>Президентская программа</h3>
            <p>Президентская программа исследовательских проектов</p>
            <div className="break"></div>
          </SwiperSlide>
          <SwiperSlide className="card">
            <h3>Поддержано Фондом</h3>
            <p>Информация о поддержанных проектах и их результатах</p>
            <div className="break"></div>
          </SwiperSlide>
          {/* </Slider> */}
        </Swiper>
      </div>
    </>
  );
}

export default Cards;
