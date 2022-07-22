import React from 'react';

import './button.css';

const Button = ({ buttonText, actionBtn, type = 'button' }) => {
	return (
		<button
			className='button'
			onClick={actionBtn ? () => actionBtn() : null}
			type={type}
		>
			{buttonText}
		</button>
	);
};

export default Button;
