import React from 'react';
import styles from "./Home.module.css";
// import { getImageUrl } from "../../utils";
import cursor from './img/cursorIcon.png'
import me from './img/aboutImage.png'
import order from './img/order.jpg'
import images from './data/candies.json';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Scrollbar } from 'swiper/modules';


const Home = () => {
  return (
    <div>
      <div className="about">
        <section className={styles.container} id="about">
         <h2 className={styles.title} style={{textAlign:'center'}}>Sweetbar and all about sweets</h2>
         <div className={styles.content}>
           <img
             src={me}
             alt="Me sitting with a laptop"
             className={styles.aboutImage}
            />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={cursor} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3></h3>
                <p>
                    Hi, my name is Nika. I am the owner and manufacturer of sweetbar products. Here you will find not only sweets for pleasure, but also health care. 
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={cursor} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                <h3></h3>
                <p>
                Our sweets are enriched with vitamins, natural ingredients and love for your well-being. Delight yourself with the taste without worrying about the composition - every delicacy here is pleasant and healthy.
                </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={cursor} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                <h3></h3>
                <p>
                Immerse yourself in the world of taste with benefits for the body!
                </p>
                </div>
            </li>
            </ul>
        </div>
      </section>
      </div>
      <div className="main__goods">
        <h2 className={styles.headOfType}>Top selling</h2>
        {/* <div id="carouselIndicators1" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {images.map((image, index) => (
              <li key={image.id} data-target="#carouselIndicators1" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
            ))}
          </ol>
          <div className={styles.carouselInner} >
            {images.map((image, index) => (
              // <div key={image.id} className={`carousel-item ${index === 0 ? "active" : ""}`} style={{ width: "50vw", height: "50vh",  /* Другие стили */ }}>
                {/* <img className="d-block w-100" src={require(`./${image.src}`)} alt={`Slide ${index + 1}`} style={{ width: "50vw", height: "50vh", objectFit: "contain" }}/>
              </div> */}
            {/* ))} */} 
          {/* </div>
        <a className="carousel-control-prev" href="#carouselIndicators1" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselIndicators1" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}

        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id}>
              <img className="d-block w-100" src={require(`./${image.src}`)} alt={`Slide ${index + 1}`} style={{ width: "50vw", height: "50vh", objectFit: "contain" }}/>
              
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
      <div className="order">
        <h2 className={styles.headOfType}>How to make an order</h2>
        <div className={styles.order_block}>
            <img src={order} alt="order" className={styles.order_img}/>
            <div className={styles.text__order}>
                <div>
                <h3>
                  There are two ways you can place an order:
                </h3>
                  <ul>
                    <li>Chose what you want and write to our instagram and we make an order online</li>
                    <li>Call us, and place an order over the phone</li>
                  </ul>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Home;