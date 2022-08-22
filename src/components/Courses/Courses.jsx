import React, { useEffect, useState } from 'react';

import CourseCard from './CourseCard';
import SearchBar from './SearchBar';

import { CUT_AUTHORS_NAME_LENGTH } from '../../constants';

import mockedAuthorsList from '../../mockedAuthorsList';
import mockedCoursesList from '../../mockedCoursesList';

import './courses.css';

const getAuthorWithId = (id) =>
	mockedAuthorsList.find((author) => author.id === id).name;

const getStringAuthors = (arrAuthors) => {
	const readyStr = arrAuthors.join(', ');
	return readyStr.length > CUT_AUTHORS_NAME_LENGTH
		? readyStr.slice(0, CUT_AUTHORS_NAME_LENGTH) + '...'
		: readyStr;
};

const getArrEachId = (courseAuthorsId) => {
	return courseAuthorsId.map((authorId) => getAuthorWithId(authorId));
};

const matchData = () => {
	return mockedCoursesList.map((course) => {
		return {
			...course,
			authors: getStringAuthors(getArrEachId(course.authors)),
		};
	});
};

const Courses = ({ toggleCourse }) => {
	const [inputField, setInputField] = useState('');
	const [dataPosts, setDataPosts] = useState([]);
	useEffect(() => {
		if (inputField === '') {
			setDataPosts(matchData());
		}
	}, [inputField]);
	const handleInputChange = (e) => {
		const { value } = e.target;
		setInputField(() => value);
	};

	const handleButtonSerach = () => {
		let temporaryData = matchData();
		const filtredData = temporaryData.filter(
			(post) =>
				post.id.toLowerCase().includes(inputField.toLowerCase()) ||
				post.title.toLowerCase().includes(inputField.toLowerCase())
		);
		setDataPosts(filtredData);
	};

	return (
		<div className='wrapper'>
			<SearchBar
				value={inputField}
				handleInputChange={handleInputChange}
				handleButtonSerach={handleButtonSerach}
				toggleCourse={toggleCourse}
			/>
			<ul>
				{dataPosts.map((item) => {
					return <CourseCard key={item.id} data={item} />;
				})}
			</ul>
		</div>
	);
};

export default Courses;
