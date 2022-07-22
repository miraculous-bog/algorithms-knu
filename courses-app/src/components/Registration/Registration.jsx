import React, { useState } from 'react';

import Input from '../../common/Input';
import Button from '../../common/Button';
import Header from '../Header/Header';

import {
	LOGIN_TITLE,
	REGISTRATION_TITLE,
	NAME_INPUT_NAME,
	TYPE_INPUT_EMAIL,
	TYPE_INPUT_PASSWORD,
	TYPE_INPUT_TEXT,
} from '../../constants';

import './registration.css';
import { useNavigate, Link } from 'react-router-dom';
import useFetch from '../../hook/useFetch';

const Login = () => {
	const [dataForm, setDataForm] = useState({
		name: '',
		email: '',
		password: '',
	});
	const { responseData, fetchData } = useFetch('register');

	const navigate = useNavigate();
	const pathToLogin = '/login';

	if (responseData.successful) navigate(pathToLogin, { replace: true });

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
					<h1 className='title'>{REGISTRATION_TITLE}</h1>
					<form className='form' onSubmit={handlerForm}>
						<Input
							labelText='Name'
							placeholdetText='Enter name'
							type={TYPE_INPUT_TEXT}
							name={NAME_INPUT_NAME}
							onChange={handlerInput}
							value={dataForm[`${NAME_INPUT_NAME}`]}
						/>
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
						<Button
							className='btn'
							buttonText={REGISTRATION_TITLE}
							type='submit'
						/>
					</form>
					<p className='tip'>
						if you already have an account you can{' '}
						<Link to={pathToLogin}>
							<span className='link-helper'>{LOGIN_TITLE}</span>
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
