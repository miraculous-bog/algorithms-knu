import {
	userFetchCreator,
	userGetCreator,
	userErrorCreator,
	userDeleteCreator,
} from './actionCreator';
import { store } from '..';

import { USER_ROLE_ADMIN } from '../../constants';

export const userLoadThunkCreator = (navigateFunctionality) => {
	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
			Authorization: localStorage.getItem('token'),
		},
	};
	const { signin, navigate, fromPage } = navigateFunctionality;
	store.dispatch(userFetchCreator());
	return function (dispatch) {
		return fetch(`http://localhost:4000/users/me`, options)
			.then((data) => data.json())
			.then((data) => {
				if (data.statusText === 'Not Found') {
					throw new Error('No such user found!!');
				} else {
					dispatch(userGetCreator(data));
					signin(data.result.name ? data.result.name : USER_ROLE_ADMIN, () =>
						navigate(fromPage, { replace: true })
					);
				}
			})
			.catch((err) => dispatch(userErrorCreator()));
	};
};
export const userDeleteThunkCreator = (cb, setUser) => {
	const options = {
		method: 'DELETE',
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	};
	store.dispatch(userFetchCreator());
	return function (dispatch) {
		return fetch(`http://localhost:4000/logout`, options)
			.then((data) => {
				if (data.statusText === 'Not Found') {
					throw new Error('No such user found!!');
				} else {
					localStorage.clear();
					dispatch(userDeleteCreator(data));
					cb();
					setUser(null);
				}
			})
			.catch((err) => dispatch(userErrorCreator()));
	};
};
