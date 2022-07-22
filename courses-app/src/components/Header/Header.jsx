import React from 'react';

import Logo from './Logo';
import Button from '../../common/Button';

import { useAuth } from '../../hook/useAuth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUsersStore } from '../../store/selectors';

import './header.css';

const Header = () => {
	const userDataFromStore = useSelector(getUsersStore);
	const { signout } = useAuth();
	const navigate = useNavigate();
	return (
		<div className='header'>
			<Logo />
			{userDataFromStore.name && (
				<div className='profile'>
					<p className='text'>{userDataFromStore.name}</p>
					<Button
						buttonText='Logout'
						actionBtn={() =>
							signout(() => navigate('../login', { replace: true }))
						}
					/>
				</div>
			)}
		</div>
	);
};

export default Header;
