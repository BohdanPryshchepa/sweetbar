// import React from 'react';
// // import img1 from './img/Candies/Fruits/fru_1.jpg'
// import img2 from './img/02.jpg'
// import img3 from './img/03.jpg'
// import img4 from './img/04.jpg'
// import img5 from './img/05.jpg'
// import images from './data/candies.json'

// const Candy = () => {
//   return (
//     <div>
//       {/* <div className="fruit_kits">
//         <h2>Sets of dried fruits</h2>
//         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         <ol className="carousel-indicators">
//           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img className="d-block w-100" src={img1}  alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img2} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img3} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img4} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img5} alt="First slide" />
//           </div>
     
//         </div>
//         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//       </div> */}



//        <div className="fruit_kits">
//         <h2>Sets of dried fruits</h2>
//         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//           <ol className="carousel-indicators">
//             {images.map((image, index) => (
//               <li key={image.id} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
//             ))}
//           </ol>
//           <div className="carousel-inner">
//             {images.map((image, index) => (
//               <div key={image.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                 <img className="d-block w-100" src={image.src} alt={`Slide ${index + 1}`} />
//               </div>
//             ))}
//           </div>
//           <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="sr-only">Previous</span>
//           </a>
//           <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="sr-only">Next</span>
//           </a>
//         </div>
//       </div> 



//       {/* <div className="choco_kits">
//         <h2>Chocolate sets</h2>
//         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         <ol className="carousel-indicators">
//           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img className="d-block w-100" src='./img/Candies/Fruits/fru_1.jpg' alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img2} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img3} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img4} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img5} alt="First slide" />
//           </div>
     
//         </div>
//         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//       </div> */}
//       {/* <div className="fruit_kits">
//         <h2>Seasons sets</h2>
//         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         <ol className="carousel-indicators">
//           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img className="d-block w-100" src={img1} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img2} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img3} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img4} alt="First slide" />
//           </div>
//           <div className="carousel-item">
//             <img className="d-block w-100" src={img5} alt="First slide" />
//           </div>
     
//         </div>
//         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//       </div> */}

//     </div>
//   );
// }

// export default Candy;

import React from 'react';
import images from './data/candies.json';
import cho_images from './data/chococandies.json';
import multi_images from './data/multiSets.json';
import styles from './Candy.module.css'

const CandyCarousel = () => {
  return (
    <div className="candy-carousel">
      <div className={styles.fruit_kits}>
        <h2 className={styles.headOfType}>Sets of dried fruits</h2>
        <div id="carouselIndicators1" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {images.map((image, index) => (
              <li key={image.id} data-target="#carouselIndicators1" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
            ))}
          </ol>
          <div className={styles.carouselInner} >
            {images.map((image, index) => (
              <div key={image.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img className="d-block w-100" src={require(`./${image.src}`)} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#carouselIndicators1" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselIndicators1" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className={styles.choco_kits}>
        <h2 className={styles.headOfType}>Sets of chocolate candies</h2>
        <div id="carouselIndicators2" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {cho_images.map((image, index) => (
              <li key={image.id} data-target="#carouselIndicators2" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
            ))}
          </ol>
          <div className={styles.carouselInner} >
            {cho_images.map((image, index) => (
              <div key={image.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img className="d-block w-100" src={require(`./${image.src}`)} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#carouselIndicators2" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselIndicators2" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className={styles.multi_kits}>
        <h2 className={styles.headOfType}>Multi Sets</h2>
        <div id="carouselIndicators3" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {multi_images.map((image, index) => (
              <li key={image.id} data-target="#carouselIndicators3" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
            ))}
          </ol>
          <div className={styles.carouselInner} >
            {multi_images.map((image, index) => (
              <div key={image.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img className="d-block w-100" src={require(`./${image.src}`)} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#carouselIndicators3" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselIndicators3" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      

    </div>
  );
}

export default CandyCarousel;
