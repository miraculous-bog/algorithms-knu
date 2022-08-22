import React from 'react';

import Logo from './Logo';
import Button from '../../common/Button';

import './header.css';

const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<div className='profile'>
				<p className='text'>David</p>
				<Button buttonText='Logout' />
			</div>
		</div>
	);
};

export default Header;
