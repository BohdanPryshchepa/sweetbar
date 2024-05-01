import React from 'react';
import styles from "./Footer.module.css";
import insta from './img/insta.svg'
import phone from './img/phone.svg'
import email from './img/email.png'

const Footer = () => {
    return (
      <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h3>Contact</h3>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:bogdanprischepa@gmail.com">sweetbar.ua@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={insta}
            alt="Insta icon"
          />
          <a href="https://www.instagram.com/sweetbar.ua/">instagram.com/sweetbar.ua</a>
        </li>
        <li className={styles.link}>
          <img src={phone} alt="Phone icon" />
          <a href="#">+38050555002233</a>
        </li>
      </ul>
    </footer>
    )}
  export default Footer
