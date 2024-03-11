import React from 'react';

import Kvylovyi404 from '../../img/khvylovyi_404.png';

import styles from './notFound.module.scss';

const NotFound = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.container}>
					<img className={styles.img} src={Kvylovyi404} alt="kvylovyi_404" />
				</div>
				<h1 className={styles.title}>
					Схоже, цієї сторінки не існує, як
					і романтики у творі «Я (Романтика)»
				</h1>
			</div>
		</div>
	);
};

export default NotFound;