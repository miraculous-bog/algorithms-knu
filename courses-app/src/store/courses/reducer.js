import {
	COURSES_GET_COURSE,
	COURSES_LOAD_FETCH,
	COURSES_LOAD_ERROR,
	COURSES_LOAD_RECEIVE_SAVE,
	COURSES_LOAD_RECEIVE_DELETE,
	COURSES_LOAD_RECEIVE_UPDATE,
} from './actionTypes';

const initialState = [];

export const coursesReducer = (state = initialState, action) => {
	const getIdDesirableItemDelete = (copiedState, id) =>
		copiedState.find((course) => course.id === id);

	switch (action.type) {
		case COURSES_LOAD_RECEIVE_DELETE:
			const copiedStateForDelete = [...state];
			const indexDeletedItem = state.indexOf(
				getIdDesirableItemDelete(copiedStateForDelete, action.payload)
			);
			copiedStateForDelete.splice(indexDeletedItem, 1);
			return copiedStateForDelete;
		case COURSES_GET_COURSE:
			return [...action.payload];
		case COURSES_LOAD_FETCH:
			return state;
		case COURSES_LOAD_RECEIVE_SAVE:
			return [...state, action.payload];
		case COURSES_LOAD_RECEIVE_UPDATE:
			const copiedStateForUpdate = [...state];
			const indexUpdateItem = copiedStateForUpdate.indexOf(
				getIdDesirableItemDelete(copiedStateForUpdate, action.payload.id)
			);
			copiedStateForUpdate.splice(indexUpdateItem, 1, action.payload);
			return copiedStateForUpdate;
		case COURSES_LOAD_ERROR:
			alert('Bad request. Not found.');
			return state;
		default:
			return state;
	}
};
