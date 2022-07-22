import React, { useState } from 'react';

import { connect, useSelector } from 'react-redux';
import {
	coursesLoadThunkCreator,
	coursesUpdateThunkCreator,
} from '../../store/courses/thunk';
import { useParams } from 'react-router-dom';

import Header from '../Header';
import CreateAuthors from './CreateAuthors/CreateAuthors';
import Button from '../../common/Button';
import Input from '../../common/Input';

import { useNavigate } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import dateGenerator from '../../helpers/dateGeneratop';
import {
	getProperAuthorsList,
	getAvailableAuthorsList,
} from '../../helpers/formAuthorById';

import {
	BUTTON_TEXT_CREATE_COURSE,
	BUTTON_TEXT_UPDATE_COURSE,
} from '../../constants';

import './createCourse.css';

const CourseForm = ({ coursesLoad, coursesUpdate }) => {
	const { idUpdate } = useParams();
	const infoState = useSelector((state) => {
		const { coursesReducer, authorsReducer } = state;
		if (idUpdate) {
			const currentPost = coursesReducer.find((item) => item.id === idUpdate);
			const addedAuthors = getProperAuthorsList(
				currentPost.authors,
				authorsReducer
			);
			const getAvailableAuthorsListItems = getAvailableAuthorsList(
				currentPost.authors,
				authorsReducer
			);
			return {
				availableAuthors: getAvailableAuthorsListItems,
				currentAddedAuthors: addedAuthors,
				data: currentPost,
			};
		}
		return null;
	});
	const [data, setData] = useState(
		infoState
			? { title: infoState.data.title, description: infoState.data.description }
			: { title: '', description: '' }
	);
	const initialStateSecondData = () => {
		if (infoState) {
			return {
				duration: infoState.data.duration,
				authors: [...infoState.data.authors],
			};
		} else {
			return {
				duration: '',
				authors: '',
			};
		}
	};
	const [secondData, setSecondData] = useState(initialStateSecondData());
	console.log('secondData', secondData);
	const navigate = useNavigate();

	const handleDataInput = (e) => {
		const formData = { [e.target.name]: e.target.value };
		setData((prev) => {
			return {
				...prev,
				...formData,
			};
		});
	};
	const handleSecondDataset = (item) => {
		setSecondData((prev) => {
			return {
				...prev,
				...item,
			};
		});
	};
	const verifyInputDataStr = (strData) => (strData.length < 2 ? false : true);
	const verifyInputDataNum = (numData) =>
		Number(numData) === 0 ? false : true;

	const verifyAllReceivedData = (receivedData) => {
		const { title, description, duration } = receivedData;

		if (
			verifyInputDataStr(title) &&
			verifyInputDataStr(description) &&
			verifyInputDataNum(duration)
		)
			return true;
		else return false;
	};
	const pushData = () => {
		const newCourse = {
			...data,
			...secondData,
			creationDate: dateGenerator(),
		};
		const newUpdate = {
			id: infoState ? infoState.data.id : uuidv4(),
			...data,
			...secondData,
			creationDate: dateGenerator(),
		};
		if (verifyAllReceivedData(newCourse)) {
			infoState ? coursesUpdate(newUpdate) : coursesLoad(newCourse);
			navigate('/courses', { replace: true });
		} else {
			alert('Please, fill in all fields');
		}
	};

	return (
		<>
			<Header />
			<div className='create-course-container'>
				<Input
					labelText='Title'
					placeholdetText='enter title'
					onChange={handleDataInput}
					name='title'
					type='text'
					value={data.title}
				/>
				<Button
					className='btn-adding'
					buttonText={
						infoState ? BUTTON_TEXT_UPDATE_COURSE : BUTTON_TEXT_CREATE_COURSE
					}
					actionBtn={pushData}
				/>
				<label htmlFor='description'>Description</label>
				<textarea
					type='text'
					id='description'
					name='description'
					value={data.description}
					onChange={handleDataInput}
				/>

				<CreateAuthors getData={handleSecondDataset} infoState={infoState} />
			</div>
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		coursesLoad: (item) => {
			dispatch(coursesLoadThunkCreator({ ...item }));
		},
		coursesUpdate: (item) => {
			dispatch(coursesUpdateThunkCreator({ ...item }));
		},
	};
};

export default connect(null, mapDispatchToProps)(CourseForm);
