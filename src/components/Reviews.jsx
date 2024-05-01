// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import images from './data/reviews.json';
// import styles from './Reviews.module.css';

// import { EffectCards } from 'swiper/modules';



// const swiperStyles = {
//   width: '50vw',
//   height: '70vh',
// };
// const imageStyles = {
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
// };

// const Reviews = () => {
//   return (
//     <div>
//       <h2>Reviews from our beloved and happy clients</h2>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//         style={swiperStyles}
//       >
//       {images.map((image, index) => (
//           <SwiperSlide key={image.id}>
//             <img src={require(`./${image.src}`)} alt={`Slide ${index + 1}`} className={styles.swiper_image} />
//           </SwiperSlide>
//         ))}
  
//       </Swiper>
//       <span>We thank all our customers for their orders, we love them very much and are looking forward to delighting them with the most delicious and healthy sweets from Sweetbar.ua</span>
//       </div>
//   );
// }

// export default Reviews;
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from './data/reviews.json';
import styles from './Reviews.module.css';

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    className: "mySlider",
  };

  return (
    <div>
    <h2 className={styles.headOfType} >Reviews from our beloved and happy clients</h2>
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={image.id}>
            <img src={require(`./${image.src}`)} alt={`Slide ${index + 1}`} className={styles.swiperImage} />
          </div>
        ))}
      </Slider>
      <p>We thank all our customers for their orders, we love them very much and are looking forward to delighting them with the most delicious and healthy sweets from Sweetbar.ua</p>
    </div>
    </div>
  );
}

export default Reviews;
