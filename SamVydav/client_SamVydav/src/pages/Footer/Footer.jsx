import React from 'react';

import SocialMedia from '../../components/SocialMedia';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <SocialMedia />
        <ul className={styles.list}>
          <li className={styles.link}>
            <a href="#">
              головна
            </a>
          </li>
          <li className={styles.link}>
            <a href="#">
              видати книгу
            </a>
          </li>
          <li className={styles.link}>
            <a href="#">
              підтримати авторів
            </a>
          </li>
          <li className={styles.link}>
            <a href="#">
              як це працює
            </a>
          </li>
          <li className={styles.link}>
            <a href="#">
              політика конфеденційності
            </a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.link}>
            <a href="#">
              партнерство з нами
            </a>
          </li>
          <li className={styles.link}>
            <a href="#">
              служба підтримка
            </a>
          </li>

        </ul>
      </div>
      <div className={styles.info}>

      </div>
      <div className={styles.juristical}>
        <p className={styles.person}>
        ФОП ТОДОРОВ МАКСИМ ОЛЕКСАНДРОВИЧ<br/>
        ЄДРПОУ: 3771110895
        </p>
        <p className={styles.copyright}>
        ©Видала громада 2023  
        </p>
      </div>
    </footer>
  );
};

export default Footer;
