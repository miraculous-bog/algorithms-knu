import React, { useState } from 'react';

import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';

import {
	TYPE_INPUT_TEXT,
	NAME_INPUT_TEXT,
	TYPE_INPUT_NUMBER,
	BUTTON_TEXT_CREATE_AUTHOR,
	BUTTON_TEXT_ADD_AUTHORS,
	BUTTON_TEXT_DELETE_AUTHORS,
} from '../../../constants';

import { v4 as uuidv4 } from 'uuid';
import mockedAuthorsList from '../../../mockedAuthorsList';
import pipeDuration from '../../../helpers/pipeDuration';

import './createAuthors.css';

const CreateAuthors = ({ getData }) => {
	const [authors, setAuthors] = useState([...mockedAuthorsList]);
	const [authorsAdded, setAuthorsAdded] = useState([]);
	const [newAuthor, setNewAuthor] = useState('');
	const [duration, setDuration] = useState(0);
	const getAllData = () => {
		return { duration: duration, authors: authorsAdded.map((item) => item.id) };
	};
	const addNewCourseAuthor = (authorId) => {
		const authorInfo = authors.find((author) => author.id === authorId);
		setAuthorsAdded((prev) => {
			const newAddedData = [...prev];
			newAddedData.push(authorInfo);
			return newAddedData;
		});
		const indexDeleteItem = authors.indexOf(authorInfo);

		setAuthors((prev) => {
			const newArr = [...prev];
			newArr.splice(indexDeleteItem, 1);
			return newArr;
		});
		getData(getAllData());
	};
	const deleteCourseAuthor = (authorId) => {
		const authorInfoAdded = authorsAdded.find(
			(author) => author.id === authorId
		);
		setAuthors((prev) => [...prev, authorInfoAdded]);
		const indexDeleteItem = authorsAdded.indexOf(authorInfoAdded);

		setAuthorsAdded((prev) => {
			const newArr = [...prev];
			newArr.splice(indexDeleteItem, 1);
			return newArr;
		});
	};

	const handlerNumberInput = (e) => {
		const nums = Number(e.currentTarget.value);
		setDuration(() => nums);
		getData(getAllData());
	};
	const handlerTextInput = (e) => {
		const authorName = e.currentTarget.value;
		setNewAuthor(authorName);
	};
	const createNewAuthor = () => {
		const newAuthorItem = { id: uuidv4(), name: newAuthor };
		setAuthors((prev) => [...prev, newAuthorItem]);
		mockedAuthorsList.push(newAuthorItem);
		console.log(authors);
		console.log(mockedAuthorsList);
	};

	return (
		<div className='wrapper-create-author'>
			<div className='inputs-side'>
				<p className='titles'>Add author</p>
				<Input
					labelText='Author name'
					placeholdetText='Enter author name'
					onChange={handlerTextInput}
					name={NAME_INPUT_TEXT}
					type={TYPE_INPUT_TEXT}
				/>
				<Button
					buttonText={BUTTON_TEXT_CREATE_AUTHOR}
					actionBtn={createNewAuthor}
				/>
				<p className='titles'>Duration</p>
				<label htmlFor='duration'>Duration</label>
				<input
					type={TYPE_INPUT_NUMBER}
					id='duration'
					placeholder='Enter duration in minutes...'
					min='0'
					onChange={handlerNumberInput}
					className='input-authors-block'
					value={duration}
				/>
				<h2 className='time'>
					Duration <span className='time-span'>{pipeDuration(duration)}</span>
					hours
				</h2>
			</div>
			<div className='authors-side'>
				<p className='titles'>Authors</p>
				<ul className='authors-list'>
					{authors.length > 0 ? (
						authors.map((backAuthor) => (
							<li key={backAuthor.id} className='author-item'>
								<p>{backAuthor.name}</p>

								<Button
									buttonText={BUTTON_TEXT_ADD_AUTHORS}
									actionBtn={() => addNewCourseAuthor(backAuthor.id)}
								/>
							</li>
						))
					) : (
						<p>Authors list is empty</p>
					)}
				</ul>

				<p className='titles'>Authors</p>
				<ul className='authors-list'>
					{authorsAdded.length > 0 ? (
						authorsAdded.map((addedAuthor) => (
							<li key={addedAuthor.id} className='author-item'>
								<p>{addedAuthor.name}</p>
								<Button
									buttonText={BUTTON_TEXT_DELETE_AUTHORS}
									actionBtn={() => deleteCourseAuthor(addedAuthor.id)}
								/>
							</li>
						))
					) : (
						<p>Authors list is empty</p>
					)}
				</ul>
			</div>
		</div>
	);
};

export default CreateAuthors;
