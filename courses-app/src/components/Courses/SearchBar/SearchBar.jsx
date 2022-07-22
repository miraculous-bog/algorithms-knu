import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Button from '../../../common/Button';
import Input from '../../../common/Input';

import { useSelector } from 'react-redux';
import { getUsersStore } from '../../../store/selectors';
import {
	BUTTON_TEXT_SEARCH,
	BUTTON_TEXT_ADD_NEW_COURSE,
	TYPE_INPUT_TEXT,
	USER_ROLE_ADMIN,
} from '../../../constants';

import './searchBar.css';
const SearchBar = ({ value, handleInputChange, handleButtonSerach }) => {
	const PATH = `/courses/add`;
	const userInfo = useSelector(getUsersStore);
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
			{userInfo.role === USER_ROLE_ADMIN ? (
				<Link to={PATH}>
					<Button buttonText={BUTTON_TEXT_ADD_NEW_COURSE} />
				</Link>
			) : null}
		</div>
	);
};

SearchBar.propTypes = {
	value: PropTypes.string,
	handleInputChange: PropTypes.func,
	handleButtonSerach: PropTypes.func,
};

export default SearchBar;
