import {
	USER_LOGIN,
	USER_LOAD_FETCH,
	USER_LOAD_ERROR,
	USER_LOAD_RECEIVE_GET,
	USER_LOAD_RECEIVE_DELETE,
} from './actionTypes';

export const loginUserCreator = (payload) => {
	return {
		type: USER_LOGIN,
		payload: payload,
	};
};

export const userFetchCreator = () => {
	return {
		type: USER_LOAD_FETCH,
	};
};

export const userErrorCreator = () => {
	return {
		type: USER_LOAD_ERROR,
	};
};
export const userGetCreator = (post) => {
	return {
		type: USER_LOAD_RECEIVE_GET,
		payload: post,
	};
};
export const userDeleteCreator = (post) => {
	return {
		type: USER_LOAD_RECEIVE_DELETE,
		payload: post,
	};
};
