import React from 'react';
import styles from './navbar.module.scss';
import HomeIcon from '../../../../iconsComponent/HomeIcon';
import { motion } from 'framer-motion';

const NavLinks =() => {
  const animateFrom = {opacity:0,y:-40};
  const animateTo = {opacity:1,y:0};
  return (

    <ul className={styles.list}>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <div className={styles.element}>
          <HomeIcon/>
          <p className={styles.text}>Головна</p>
        </div>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <div className={styles.element}>
          <HomeIcon />
          <p className={styles.text}>Видати книгу</p>
        </div>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <div className={styles.element}>
          <HomeIcon />
          <p className={styles.text}>Підтримка авторів</p>
        </div>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <div className={styles.element}>
          <HomeIcon />
          <p className={styles.text}>Як це працює</p>
        </div>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <div className={styles.element}>
          <HomeIcon />
          <p className={styles.text}>Партнерство</p>
        </div>
      </motion.li>
    </ul>

  );
};

export default NavLinks;