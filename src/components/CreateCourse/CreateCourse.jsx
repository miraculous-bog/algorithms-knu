import React, { useState } from 'react';

import CreateAuthors from './CreateAuthors/CreateAuthors';
import Button from '../../common/Button';
import Input from '../../common/Input';

import { v4 as uuidv4 } from 'uuid';

import mockedCoursesList from '../../mockedCoursesList';
import dateGenerator from '../../helpers/dateGeneratop';

import './createCourse.css';

const CreateCourse = ({ toggleCourse }) => {
	const [data, setData] = useState({ title: '', description: '' });
	const [secondData, setSecondData] = useState({ duration: 0, authors: [] });

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
			id: uuidv4(),
			...data,
			...secondData,
			creationDate: dateGenerator(),
		};
		console.log(newCourse);
		if (verifyAllReceivedData(newCourse)) {
			mockedCoursesList.push(newCourse);

			toggleCourse();
		} else {
			alert('Please, fill in all fields');
		}
	};
	return (
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
				buttonText='Create Course'
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

			<CreateAuthors getData={handleSecondDataset} />
		</div>
	);
};

export default CreateCourse;
