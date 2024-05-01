import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from './img/Seasons/pic_1.jpg'
import pic2 from './img/Seasons/pic_2.jpg'
import pic3 from './img/Seasons/pic_3.jpg'
import pic4 from './img/Seasons/pic_4.jpg'
import pic5 from './img/Seasons/pic_5.jpg'
import pic6 from './img/Seasons/pic_6.jpg'
import pic7 from './img/Seasons/pic_7.jpg'

import './Seasons.module.css'
import styles from './Seasons.module.css';



import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Zoom, Navigation, Pagination } from 'swiper/modules';

const swiperStyles = {
  width: '50vw',
  height: '70vh',
  borderRadius: '15px',
};

const Seasons = () => {
  return (
    <div className="seasons-container">
      <h2 className={styles.headOfType}>Seasons products</h2>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          ...swiperStyles,
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
        style={swiperStyles}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={pic7} className="season-image" style={{borderRadius:'20px'}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={pic1} className="season-image" style={{borderRadius:'20px'}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={pic2} className="season-image" style={{borderRadius:'20px'}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={pic3} className="season-image" style={{borderRadius:'20px'}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={pic4} className="season-image" style={{borderRadius:'20px'}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={pic5} className="season-image" style={{borderRadius:'20px', width: '50vw',
  height: '70vh',}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <img src={pic6} className="season-image" style={{borderRadius:'20px'}}/>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
}

export default Seasons;