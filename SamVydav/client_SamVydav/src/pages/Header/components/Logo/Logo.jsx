import React from 'react';

import logoImg from '../../../../icons/logo.svg';
// import logoText from '../../../../icons/logoText.svg';

import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={logoImg} alt="logo-img" />
      {/* <img className={styles.text} src={logoText} alt="logo-text" /> */}
    </div>
  );
};

export default Logo;