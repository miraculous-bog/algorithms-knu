import React from 'react';

import Button from '../../../common/Button';

import pipeDuration from '../../../helpers/pipeDuration';

import { BUTTON_TEXT_SHOW_COURSE } from '../../../constants';

import './courseCard.css';

const CourseCard = ({ data }) => {
	return (
		<li className='course-card-container'>
			<div className='left'>
				<h2>{data.title}</h2>
				<p>{data.description}</p>
			</div>
			<div className='right'>
				<p>Authors: {data.authors}</p>
				<p>Duration: {pipeDuration(data.duration)} hours</p>
				<p>Created: {data.creationDate.replace(/[/]/g, '.')}</p>
				<Button buttonText={BUTTON_TEXT_SHOW_COURSE} />
			</div>
		</li>
	);
};
// { title, description, authors, duration, date }
export default CourseCard;
