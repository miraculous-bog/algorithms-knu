import React, { useState } from 'react';

import Header from './components/Header';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';

import './App.css';

function App() {
	const [displayCourses, setDisplayCourses] = useState(true);
	const handlerClick = () => setDisplayCourses((prev) => !prev);
	return (
		<>
			<Header />
			{displayCourses ? (
				<Courses className='course' toggleCourse={setDisplayCourses} />
			) : (
				<CreateCourse className='create' toggleCourse={handlerClick} />
			)}
		</>
	);
}

export default App;
