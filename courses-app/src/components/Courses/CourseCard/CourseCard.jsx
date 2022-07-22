import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import ButtonImg from '../../../common/ButtonImg/ButtonImg';
import basketImg from '../../../img/basket.png';
import pencilImg from '../../../img/pencil.png';

import pipeDuration from '../../../helpers/pipeDuration';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { BUTTON_TEXT_SHOW_COURSE, USER_ROLE_ADMIN } from '../../../constants';
import { getUsersStore } from '../../../store/selectors';

import './courseCard.css';

const CourseCard = ({ data, deleteCourse }) => {
	const path = `/courses/${data.id}`;
	const pathToEdit = `/courses/update/${data.id}`;
	const deleteCourseAction = () => deleteCourse(data.id);
	const userInfo = useSelector(getUsersStore);
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
				<div className='btn-container'>
					<Link to={path}>
						<Button buttonText={BUTTON_TEXT_SHOW_COURSE} />
					</Link>
					{userInfo.role === USER_ROLE_ADMIN ? (
						<div>
							<Link to={pathToEdit}>
								<ButtonImg buttonImg={pencilImg} />
							</Link>
							<ButtonImg buttonImg={basketImg} actionBtn={deleteCourseAction} />
						</div>
					) : null}
				</div>
			</div>
		</li>
	);
};

CourseCard.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		authors: PropTypes.string,
		title: PropTypes.string,
		creationDate: PropTypes.string,
		description: PropTypes.string,
		duration: PropTypes.number,
	}),
};

export default CourseCard;
