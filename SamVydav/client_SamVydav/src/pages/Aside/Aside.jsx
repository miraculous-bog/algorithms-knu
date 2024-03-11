import React from 'react';

import CrashIcon from '../../iconsComponent/CrashIcon';
import CoinIcon from '../../iconsComponent/CoinIcon';
import RouletteIcon from '../../iconsComponent/RouletteIcon';
import UpgradeIcon from '../../iconsComponent/UpgradeIcon';
import CasesIcon from '../../iconsComponent/CasesIcon';
import MinesIcon from '../../iconsComponent/MinesIcon';
import TowerIcon from '../../iconsComponent/TowerIcon';
import PlinkoIcon from '../../iconsComponent/PlinkoIcon';
import DiscordIcon from '../../iconsComponent/DiscordIcon';

import styles from './aside.module.scss';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.element}>
            <CrashIcon />
            <p className={styles.text}>Crash</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.element}>
            <CoinIcon />
            <p className={styles.text}>CoinFlip</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.element}>
            <RouletteIcon />
            <p className={styles.text}>Roulette</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.element}>
            <UpgradeIcon />
            <p className={styles.text}>Upgrade</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.element}>
            <CasesIcon />
            <p className={styles.text}>Cases</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.element}>
            <MinesIcon />
            <p className={styles.text}>Mines</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.element}>
            <TowerIcon />
            <p className={styles.text}>Tower</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.element}>
            <PlinkoIcon />
            <p className={styles.text}>Plinko</p>
          </div>
        </li>
        <li className={`${styles.item} ${styles.discord}`}>
          <div className={styles.element}>
            <DiscordIcon />
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;