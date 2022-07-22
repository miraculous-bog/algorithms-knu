import { CUT_AUTHORS_NAME_LENGTH } from '../constants';

const getAuthorWithId = (authorsList, id) =>
	authorsList.find((author) => author.id === id).name;

const getStringAuthors = (arrAuthors, doAx = true) => {
	const readyStr = arrAuthors.join(', ');
	return doAx && readyStr.length > CUT_AUTHORS_NAME_LENGTH
		? readyStr.slice(0, CUT_AUTHORS_NAME_LENGTH) + '...'
		: readyStr;
};
const getArrEachId = (courseAuthorsId, authorsList) => {
	return courseAuthorsId.map((authorId) =>
		getAuthorWithId(authorsList, authorId)
	);
};

const getAuthorsWithId = (authorsList, id) =>
	authorsList.find((author) => author.id === id);

const getProperAuthorsList = (properAuthorsId, authorsList) => {
	return properAuthorsId.map((authorId) =>
		getAuthorsWithId(authorsList, authorId)
	);
};

const getAvailableAuthorsList = (properAuthorsId, authorsList) => {
	const result = [...authorsList];
	properAuthorsId.forEach((authorId) => {
		const elementToDelete = result.find((item) => item.id === authorId);
		const indexElementToDelete = result.indexOf(elementToDelete);
		result.splice(indexElementToDelete, 1);
	});
	return result;
};
export {
	getAuthorWithId,
	getStringAuthors,
	getArrEachId,
	getProperAuthorsList,
	getAvailableAuthorsList,
};
