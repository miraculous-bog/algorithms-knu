import React from 'react';

import CrashIcon from '../../../../iconsComponent/CrashIcon';
import Photo from '../../../../img/photo.jpg';
import Account from '../../../../icons/account.svg';
// import CoinIcon from '../../../../iconsComponent/CoinIcon';
// import RouletteIcon from '../../../../iconsComponent/RouletteIcon';
// import UpgradeIcon from '../../../../iconsComponent/UpgradeIcon';
// import CasesIcon from '../../../../iconsComponent/CasesIcon';
// import MinesIcon from '../../../../iconsComponent/MinesIcon';
// import TowerIcon from '../../../../iconsComponent/TowerIcon';
// import PlinkoIcon from '../../../../iconsComponent/PlinkoIcon';
// import DiscordIcon from '../../../../iconsComponent/DiscordIcon';

import styles from './tabel.module.scss';

const Tabel = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.line}>
            <div className={styles.game}>
              <CrashIcon />
              <p>Crash</p>
            </div>
            <div className={styles.username}>
              <img src={Photo} alt="avatar" />
              <p>Ronald Richards</p>
            </div>
            <div className={styles.time}>
              <p>16:15</p>
            </div>
            <div className={styles.bet}>
              <img src={Account} alt="Account" />
            </div>
            <div className={styles.multiplier}>
              <p>1.67<span>x</span></p>
            </div>
            <div className={styles.payout}>
              <img src={Photo} alt="avatar" />
              <p>Ronald Richards</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Tabel;