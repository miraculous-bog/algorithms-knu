import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userDeleteThunkCreator } from '../store/user/thunk';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const dispatch = useDispatch();

	const signin = (newUser, cb) => {
		setUser(newUser);
		cb();
	};
	const signout = (cb) => {
		dispatch(userDeleteThunkCreator(cb, setUser));
	};

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.element,
};
