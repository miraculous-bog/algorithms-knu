import React from 'react';

import './buttonImg.css';

const ButtonImg = ({ buttonImg, actionBtn }) => {
	return (
		<button
			className='button-img-container'
			onClick={actionBtn ? () => actionBtn() : null}
			type='button'
		>
			<img className='button-img' src={buttonImg} alt='delete-basket-btn' />
		</button>
	);
};

export default ButtonImg;
