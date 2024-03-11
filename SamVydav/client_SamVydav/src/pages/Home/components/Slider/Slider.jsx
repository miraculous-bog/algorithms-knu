import React from 'react';

import CrashSlide from '../../../../img/CrashSlide.png';
import MinesSlide from '../../../../img/MinesSlide.png';
import CoinflipSlide from '../../../../img/CoinflipSlide.png';
import CasesSlide from '../../../../img/CasesSlide.png';
import UpgradeSlide from '../../../../img/UpgradeSlide.png';
import RouletteSlide from '../../../../img/RouletteSlide.png';
import TowerSlide from '../../../../img/TowerSlide.png';
import PlinkoSlide from '../../../../img/PlinkoSlide.png';

import styles from './slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Popular game</h1>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <img className={styles.img} src={CrashSlide} alt="CrashSlide" />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={MinesSlide} alt="MinesSlide" />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={CoinflipSlide} alt="CoinflipSlide" />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={CasesSlide} alt="CasesSlide" />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={UpgradeSlide} alt="UpgradeSlide" />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={RouletteSlide} alt="RouletteSlide" />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={TowerSlide} alt="TowerSlide" />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={PlinkoSlide} alt="PlinkoSlide" />
        </div>
      </div>
      <div className={styles.controllers}>
        <div className={`${styles.indecator} ${styles.active}`}>
        </div>
        <div className={styles.indecator}>
        </div>
      </div>
    </div>
  );
};

export default Slider;