import React from 'react';
import styles from "./Contacts.module.css";
import cursor from './img/cursorIcon.png'
import delivery from './img/delivery/p2p.jpg'
import TakeAway from './img/delivery/take away.jpg'

import contacts from './data/contacts.json';


const Contacts = () => {
  return (
    <div>
       <div className="about">
        <section className={styles.container} id="about">
         <h2 className={styles.title}>How you can contact us?😋</h2>
         <div className={styles.content}>
          {/* <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={insta} alt="insta icon" />
              <div className={styles.aboutItemText}>
                <h3></h3>
                <p>
                   You can write to our direct and we will heph you to place an order🤗
                </p>
                <a href="#">Click here👆</a>
              </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={email} alt="email icon" />
                <div className={styles.aboutItemText}>
                <h3></h3>
                <p>
                  You can write to our email adress, we will answer you as soon as possible and place you order😃
                </p>
                <a href="#" className={styles.button_click}>
                  <span className={`${styles.button__line} ${styles.button__line__top}`}></span>
                  <span className={`${styles.button__line} ${styles.button__line__right}`}></span>
                  <span className={`${styles.button__line} ${styles.button__line__bottom}`}></span>
                  <span className={`${styles.button__line} ${styles.button__line__left}`}></span>
                  Click here👆</a>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={phone} alt="phone icon" />
                <div className={styles.aboutItemText}>
                <h3></h3>
                <p>
                  You can call us and we will help you to place an order over the phone👌
                </p>
                <a href="#">Click here👆</a>
                </div>
            </li>
            </ul> */}

        <ul className={styles.aboutItems}>
            {contacts.map(item => (
                <li key={item.id} className={styles.aboutItem}>
                    <img src={require(`./${item.src}`)} />
                    <div className={styles.aboutItemText}>
                        <h3></h3>
                        <p>{item.text}</p>
                        <a href={item.href} className={styles.button_click}>
                            <span className={`${styles.button__line} ${styles.button__line__top}`}></span>
                            <span className={`${styles.button__line} ${styles.button__line__right}`}></span>
                            <span className={`${styles.button__line} ${styles.button__line__bottom}`}></span>
                            <span className={`${styles.button__line} ${styles.button__line__left}`}></span>
                            Click here👆
                        </a>
                    </div>
                </li>
            ))}
        </ul>

        </div>
      </section>
      </div>
      <div className='order'>
        <h2 className={styles.headOfType}>Delivery</h2>
        <div>
          <div className={styles.delivery}>
            <img src={delivery} alt="delImg" className='delivery'/>
            <span>When you place an order we will send your order on any delivery company you chose: NovaPost,UkrPost,Ups...</span>
          </div>
          <div className={styles.takeAway}>
            <span>You can take away your order at Yuria Kondratyka st. in Dnipro</span>
            <img src={TakeAway} alt="Taway" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;