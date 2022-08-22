import React from 'react';

import './button.css';

const Button = ({ buttonText, actionBtn }) => {
	return (
		<button className='button' onClick={() => actionBtn()}>
			{buttonText}
		</button>
	);
};

export default Button;
