import React from 'react';

import './input.css';

export const Input = ({
	labelText,
	placeholdetText,
	onChange,
	name,
	type,
	value,
}) => {
	return (
		<>
			<label htmlFor={name}>{labelText}</label>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholdetText}
			/>
		</>
	);
};

export default Input;
