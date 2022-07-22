import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Courses from './components/Courses';
import CourseForm from './components/CourseForm';
import CourseInfo from './components/CourseInfo';

import Login from './components/Login';
import Registration from './components/Registration';
import RequireAuth from './hoc/RequireAuth';
import PrivateRouter from './components/PrivateRouter';
import { AuthProvider } from './hoc/AuthProvider';

import './App.css';

function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Navigate to='../login' />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/register' element={<Registration />}></Route>
					<Route
						index
						path='/courses'
						element={
							<RequireAuth>
								<Courses className='course' />
							</RequireAuth>
						}
					/>
					<Route
						path='/courses/add'
						element={
							<RequireAuth>
								<PrivateRouter>
									<CourseForm className='create' />
								</PrivateRouter>
							</RequireAuth>
						}
					/>
					<Route
						path='/courses/update/:idUpdate'
						element={
							<RequireAuth>
								<PrivateRouter>
									<CourseForm className='create' />
								</PrivateRouter>
							</RequireAuth>
						}
					/>
					<Route
						path='/courses/:id'
						element={
							<RequireAuth>
								<CourseInfo />
							</RequireAuth>
						}
					/>
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
