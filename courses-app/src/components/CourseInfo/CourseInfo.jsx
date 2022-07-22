import React from 'react';

import { useParams, Link } from 'react-router-dom';
import pipeDuration from '../../helpers/pipeDuration';
import { useSelector } from 'react-redux';
import { getCoursesAndAuthorsList } from '../../store/selectors';

import Header from '../Header';
import { getStringAuthors, getArrEachId } from '../../helpers/formAuthorById';
import './courseInfo.css';

const CourseInfo = () => {
	const { id } = useParams();
	const coursesAndAuthorsList = useSelector(getCoursesAndAuthorsList);
	const getCurrentDataPostById = coursesAndAuthorsList[0].find(
		(post) => post.id === id
	);

	const dataWithAuthors = {
		...getCurrentDataPostById,
		authors: getStringAuthors(
			getArrEachId(getCurrentDataPostById.authors, coursesAndAuthorsList[1]),
			false
		),
	};

	return (
		<>
			<Header />
			<div className='course-info-containter'>
				<Link to='/courses' className='link'>
					&#60; Back to courses
				</Link>

				<h1 className='title'>{dataWithAuthors.title}</h1>
				<div className='flex-wrapper'>
					<div className='text-side'>
						<p>{dataWithAuthors.description}</p>
					</div>
					<div className='other-info-side'>
						<p>
							<span className='bold-subtitles'>ID:</span> {dataWithAuthors.id}
						</p>
						<p>
							<span className='bold-subtitles'>Duration:</span>{' '}
							{pipeDuration(dataWithAuthors.duration)} hours
						</p>
						<p>
							<span className='bold-subtitles'>Created:</span>{' '}
							{dataWithAuthors.creationDate.replace(/[/]/g, '.')}
						</p>
						<p>
							<span className='bold-subtitles'>Authors:</span>{' '}
							{dataWithAuthors.authors}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseInfo;
