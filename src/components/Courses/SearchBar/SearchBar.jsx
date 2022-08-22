import React from 'react';

import Button from '../../../common/Button';
import Input from '../../../common/Input';

import {
	BUTTON_TEXT_SEARCH,
	BUTTON_TEXT_ADD_NEW_COURSE,
	TYPE_INPUT_TEXT,
} from '../../../constants';

import './searchBar.css';
const SearchBar = ({
	value,
	handleInputChange,
	handleButtonSerach,
	toggleCourse,
}) => {
	return (
		<div className='search-bar'>
			<div className='serach-panel'>
				<Input
					labelText=''
					placeholdetText='Enter course name'
					onChange={handleInputChange}
					name='text'
					type={TYPE_INPUT_TEXT}
					value={value}
				/>
				<Button
					buttonText={BUTTON_TEXT_SEARCH}
					actionBtn={handleButtonSerach}
				/>
			</div>
			<Button
				buttonText={BUTTON_TEXT_ADD_NEW_COURSE}
				actionBtn={toggleCourse}
			/>
		</div>
	);
};

export default SearchBar;
