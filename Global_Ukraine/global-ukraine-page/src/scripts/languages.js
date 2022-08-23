import { langArr } from './translation.js';
const select = document.querySelector('.change-lang');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#ua';
		location.reload();
	}
	select.value = hash;
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}
}
changeLanguage();