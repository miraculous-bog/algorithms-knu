const dateGenerator = () => {
	let date = new Date();
	let output =
		String(date.getDate()).padStart(2, '0') +
		'/' +
		String(date.getMonth() + 1).padStart(2, '0') +
		'/' +
		date.getFullYear();
	return output;
};
export default dateGenerator;
