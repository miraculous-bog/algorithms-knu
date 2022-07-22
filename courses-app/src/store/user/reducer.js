import {
	USER_LOGIN,
	USER_LOAD_RECEIVE_GET,
	USER_LOAD_RECEIVE_DELETE,
	USER_LOAD_ERROR,
} from './actionTypes';

import { USER_ROLE_ADMIN } from '../../constants';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN:
			const { result, successful, user, role } = action.payload;
			return {
				isAuth: successful,
				name: user.name ? user.name : USER_ROLE_ADMIN,
				email: user.email,
				token: result,
				role,
			};
		case USER_LOAD_ERROR:
			alert('Bad request. Not found.');
			return state;
		case USER_LOAD_RECEIVE_DELETE:
			return initialState;
		case USER_LOAD_RECEIVE_GET:
			const userResponse = { ...action.payload.result };
			return {
				isAuth: true,
				name: userResponse.name ? userResponse.name : USER_ROLE_ADMIN,
				email: userResponse.email,
				token: localStorage.getItem('token'),
				role: userResponse.role,
			};
		default:
			return state;
	}
};
