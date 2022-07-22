import { combineReducers } from 'redux';
import { coursesReducer } from './courses/reducer';
import { authorsReducer } from './authors/reducer';
import { userReducer } from './user/reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
	coursesReducer,
	authorsReducer,
	userReducer,
});
export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
