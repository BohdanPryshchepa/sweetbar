// import React from 'react';

// const Choco = () => {
//   return (
//     <div>
     
//     </div>
//   );
// }

// export default Choco;
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Choco.module.css';
import styles from './Choco.module.css';
import images from './data/chocolate.json';


import { EffectCards,Pagination, Navigation, Keyboard  } from 'swiper/modules';


const swiperStyles = {
  width: '50vw',
  height: '50vh',
};
const imageStyles = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export default function Choco() {
  return (
    <>
    <div>
      <h2>Fruit chocolates</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={swiperStyles}
      >
      {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <img src={require(`./${image.src}`)} alt={`Slide ${index + 1}`} className={styles.swiper_image} />
          </SwiperSlide>
        ))}
  
      </Swiper>
      </div>
      {/* <div>
      <h2>Top chocolates</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={swiperStyles}

      >
        <SwiperSlide><img src={img1} alt="" style={imageStyles}/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" style={imageStyles}/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" style={imageStyles}/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" style={imageStyles}/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" style={imageStyles}/></SwiperSlide>
      </Swiper>
      </div>
      <div>
        <h2>Seasons chocolates</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
        style={swiperStyles}
      >
        <SwiperSlide><img src={img1} alt="" style={imageStyles}/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" style={imageStyles}/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" style={imageStyles}/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" style={imageStyles}/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" style={imageStyles}/></SwiperSlide>
      </Swiper>
      </div> */}
    </>
  );
}