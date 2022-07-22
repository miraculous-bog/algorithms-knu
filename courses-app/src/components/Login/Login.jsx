import React, { useEffect, useState } from 'react';

import Input from '../../common/Input';
import Button from '../../common/Button';
import Header from '../Header/Header';

import {
	LOGIN_TITLE,
	REGISTRATION_TITLE,
	TYPE_INPUT_EMAIL,
	TYPE_INPUT_PASSWORD,
} from '../../constants';

import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
import useFetch from '../../hook/useFetch';
import { useDispatch } from 'react-redux';
import { fetchInitialAuthors } from '../../servisces';

import './login.css';
import { loginUserCreator } from '../../store/user/actionCreator';
import { userLoadThunkCreator } from '../../store/user/thunk';
const Login = () => {
	const [dataForm, setDataForm] = useState({ email: '', password: '' });
	const { responseData, fetchData } = useFetch('login');

	const navigate = useNavigate();
	const location = useLocation();
	const { signin } = useAuth();

	const dispatch = useDispatch();

	const fromPage = location.state?.from?.pathname || '/courses';
	const navigateFunctionality = {
		signin,
		navigate,
		fromPage,
	};
	useEffect(() => {
		if (responseData.successful) {
			fetchInitialAuthors(dispatch);
			dispatch(loginUserCreator(responseData));
			localStorage.setItem('token', responseData.result);
			dispatch(userLoadThunkCreator(navigateFunctionality));
		} else if (localStorage.getItem('token')) {
			fetchInitialAuthors(dispatch);
			dispatch(userLoadThunkCreator(navigateFunctionality));
		}
	}, [responseData, localStorage]);

	const handlerInput = (e) => {
		const formData = { [e.target.name]: e.target.value };
		setDataForm((prev) => {
			return {
				...prev,
				...formData,
			};
		});
	};

	const handlerForm = (e) => {
		e.preventDefault();
		fetchData(dataForm);
	};

	return (
		<>
			<Header />
			<div className='wrapper-form'>
				<div className='form-container'>
					<h1 className='title'>{LOGIN_TITLE}</h1>
					<form className='form' onSubmit={handlerForm}>
						<Input
							labelText='Email'
							placeholdetText='Enter email'
							type={TYPE_INPUT_EMAIL}
							name={TYPE_INPUT_EMAIL}
							onChange={handlerInput}
							value={dataForm[`${TYPE_INPUT_EMAIL}`]}
						/>
						<Input
							labelText='Password'
							placeholdetText='Enter password'
							type={TYPE_INPUT_PASSWORD}
							name={TYPE_INPUT_PASSWORD}
							onChange={handlerInput}
							value={dataForm[`${TYPE_INPUT_PASSWORD}`]}
						/>
						<Button className='btn' buttonText={LOGIN_TITLE} type='submit' />
					</form>
					<p className='tip'>
						if you not have an account you can{' '}
						<Link to='/register'>
							<span className='link-helper'>{REGISTRATION_TITLE}</span>
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
