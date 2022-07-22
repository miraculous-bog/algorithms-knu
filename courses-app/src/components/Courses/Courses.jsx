import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { coursesDeleteThunkCreator } from '../../store/courses/thunk';

import CourseCard from './CourseCard';
import SearchBar from './SearchBar';
import Header from '../Header';

import { getStringAuthors, getArrEachId } from '../../helpers/formAuthorById';

import './courses.css';

const matchData = (courses, authors) => {
	return courses.map((course) => {
		return {
			...course,
			authors: getStringAuthors(getArrEachId(course.authors, authors)),
		};
	});
};

const Courses = ({ courses, deleteCourse, authors }) => {
	const [inputField, setInputField] = useState('');
	const [dataPosts, setDataPosts] = useState([]);
	useEffect(() => {
		if (inputField === '') {
			setDataPosts(matchData(courses, authors));
		}
	}, [inputField, courses, authors]);

	const handleInputChange = (e) => {
		const { value } = e.target;
		setInputField(() => value);
	};

	const handleButtonSerach = () => {
		let temporaryData = matchData(courses, authors);
		const filtredData = temporaryData.filter(
			(post) =>
				post.id.toLowerCase().includes(inputField.toLowerCase()) ||
				post.title.toLowerCase().includes(inputField.toLowerCase())
		);
		setDataPosts(filtredData);
	};

	return (
		<>
			<Header />
			<div className='wrapper'>
				<SearchBar
					value={inputField}
					handleInputChange={handleInputChange}
					handleButtonSerach={handleButtonSerach}
				/>
				<ul>
					{dataPosts.map((item) => {
						return (
							<CourseCard
								key={item.id}
								data={item}
								deleteCourse={deleteCourse}
							/>
						);
					})}
				</ul>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	const { coursesReducer, authorsReducer } = state;
	return {
		courses: coursesReducer,
		authors: authorsReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteCourse: (item) => {
			dispatch(coursesDeleteThunkCreator(item));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
