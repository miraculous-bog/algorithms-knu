import { getCourseCreator } from './store/courses/actionCreator';
import { getAuthorCreator } from './store/authors/actionCreator';

export const fetchInitialCourses = (dispatch) => {
	fetch(`http://localhost:4000/courses/all`)
		.then((res) => res.json())
		.then((post) => dispatch(getCourseCreator(post.result)))
		.catch((error) => console.log(error));
};
export const fetchInitialAuthors = (dispatch) => {
	fetch(`http://localhost:4000/authors/all`)
		.then((res) => res.json())
		.then((post) => dispatch(getAuthorCreator(post.result)))
		.then(() => fetchInitialCourses(dispatch))
		.catch((error) => console.log(error));
};
