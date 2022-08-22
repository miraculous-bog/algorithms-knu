const allowedNameCountryUa = ['Австрія', 'Бельгія', 'Болгарія', 'Хорватія', 'Кіпр', 'Чехія', 'Данія', 'Естонія', 'Фінляндія', 'Франція', ' Німеччина', 'Греція', 'Угорщина', 'Ірландія', 'Італія', 'Латвія', 'Литва', 'Люксембург', 'Мальта', 'Нідерланди', 'Польща', 'Португалія', 'Румунія', 'Словаччина', 'Словенія', 'Іспанія', 'Швеція', 'Україна', 'Ісландія', 'Ліхтенштейн', 'Норвегія'];
const allowedNameCountryEn = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Ukraine', 'Sceland', 'Liechtenstein', 'Norway'];
const DefaultValueSelectUa = 'Вибрати країну...';
const DefaultValueSelectEn = 'Choose other country...';
let hash = window.location.hash;
hash = hash.substr(1);
const inpName = document.querySelector('#name').querySelector('input');
hash === 'ua' ? inpName.placeholder = 'Гліб Українець' : inpName.placeholder = 'Hlib Ukrainets';

let DefaultValueSelectLang = '';
hash === 'ua' ? DefaultValueSelectLang = DefaultValueSelectUa : DefaultValueSelectLang = DefaultValueSelectEn


document.querySelector("body").addEventListener("click", (e) => {
	refs.modal.style.opacity = 0;
});

const refs = {
	formButton: document.querySelector('.form__btn'),
	form: document.querySelector('.form'),
	modal: document.querySelector('.modal'),
	modalContent: document.querySelector('.modal-content'),
	header: document.querySelector('.header'),
	wrapper: document.querySelector('.wrapper'),
	selectCustomOptions: document.querySelector('.selectCustom-options'),
	selectCustomTrigger: document.querySelector('.selectCustom-trigger'),
}
refs.selectCustomTrigger.innerText = DefaultValueSelectLang;
const getSelectMurcup = () => {
	const arrMurcupSelectItem = hash === 'ua' ? allowedNameCountryUa.map(item => `<div class="selectCustom-option">${item}</div>`) : allowedNameCountryEn.map(item => `<div class="selectCustom-option">${item}</div>`);
	return arrMurcupSelectItem.join("");
}
refs.selectCustomOptions.innerHTML = getSelectMurcup();
const extractData = (formElement) => {

	const name = formElement[0].value;
	const email = formElement[1].value;
	const country = refs.selectCustomTrigger.innerText;

	const checkboxFirst = ['Індивідуальний (фізособа)', formElement[2].checked];
	const checkboxSecond = [' Корпоративний (ФОП)', formElement[3].checked];
	return { name, email, country, checkboxFirst, checkboxSecond };
}

const verifyName = (nameStr) => {
	if (nameStr.length === 0) {
		return hash === 'ua' ? 'Це поле не повинно бути пустим!' : 'This field must not be empty!';
	}
	if (/[0-9]/g.test(nameStr)) return hash === 'ua' ? 'Це поле не повинно містити числа!' : 'This field must not contain numbers!';
	const splitedName = nameStr.split(" ");

	if (splitedName.length === 1 || splitedName[0].length < 2 || splitedName[1].length < 2) return hash === 'ua' ? 'Неправильний формат. Імя та фамілія повинні бути в такому форматі: Гліб Українець' : 'Invalid format. The first and last name must be in the following format: Hlib Ukrainets';
	return false;
}
const verifyCountry = () => {
	;
	if (refs.selectCustomTrigger.innerText === DefaultValueSelectLang) {
		return hash === 'ua' ? 'Виберіть країну!' : 'Choose country!';
	}
	return false;
}
const verifyCheckbox = (checkboxes) => {
	if (checkboxes.indexOf(true) === -1) return hash === 'ua' ? 'Виберіть хоча б один із запропонованих варіантів' : 'Choose at least one of the proposed options';
	return false;
}
const cleanErrors = (elementsToClean) => elementsToClean.forEach(item => item.innerText = '');

const getMurcup = (option) => {
	const dataRequest = {};
	if (option) {
		dataRequest.img = 'success-icon';
		dataRequest.alt = 'success';
		dataRequest.firstTitle = 'Ваші дані надіслані успішно!';
		dataRequest.secondTitle = 'Очікуйте відповіді...';
		dataRequest.aTitle = 'Завершити';
	} else {
		dataRequest.img = 'forbidden-icon';
		dataRequest.alt = 'error';
		dataRequest.firstTitle = 'Щось пішло не так...';
		dataRequest.secondTitle = 'Спробуйте ще раз';
		dataRequest.aTitle = 'Спробувати';
	}
	return `<div class="modal-body">
	<img src="img/${dataRequest.img}.png" alt="${dataRequest.alt}">
	<p>${dataRequest.firstTitle}</p>
	<p>${dataRequest.secondTitle}</p>
	<a class="main-button modal-btn">${dataRequest.aTitle}</a>
</div>`;
}
const errorWindowOpen = (error) => {
	refs.modalContent.innerHTML = '';
	refs.modalContent.innerHTML = getMurcup(false);
	refs.modal.style.opacity = 1;
}
const successWindowOpen = (post) => {
	refs.modalContent.innerHTML = '';
	if (post.status === 200) {
		refs.modalContent.innerHTML = getMurcup(true);
		refs.modal.style.opacity = 1;
	} else errorWindowOpen('error');
}


const formHandler = (e) => {
	e.preventDefault();
	console.log("clock");
	const nameElement = document.querySelector('#name').querySelector('.error');
	const emailElement = document.querySelector('#email').querySelector('.error');
	const countryElement = document.querySelector('#country').querySelector('.error');
	const checkboxElement = document.querySelector('#checkbox').querySelector('.error');

	cleanErrors([nameElement, emailElement, countryElement, checkboxElement]);

	const element = e.currentTarget;
	console.dir(e.currentTarget);
	const data = extractData(element);

	const msgErrorName = verifyName(data.name);
	const msgErrorCountry = verifyCountry(data.country);
	const msgErrorCheckbox = verifyCheckbox([data.checkboxFirst[1], data.checkboxFirst[1]]);



	msgErrorName ? nameElement.innerText = msgErrorName : null;
	msgErrorCountry ? countryElement.innerText = msgErrorCountry : null;
	msgErrorCheckbox ? checkboxElement.innerText = msgErrorCheckbox : null;
	console.log(data);
	const accountArr = [data.checkboxFirst, data.checkboxSecond];
	let accountStr = accountArr.filter(item => item[1] === true);
	console.log(accountStr);

	if (accountStr.length >= 2) {
		accountStr = `${accountStr[0][0]}, ${accountStr[1][0]}`;
	} else accountStr = `${accountStr[0][0]}`

	const postToAdd = {
		name: data.name,
		email: data.email,
		country: data.country,
		account: accountStr,
	}
	if (!msgErrorName && !msgErrorCountry && !msgErrorCheckbox) {
		console.log("fetch", postToAdd);
		try {
			fetch('https://global-ukraine-card.herokuapp.com/', {
				method: 'POST',
				body: JSON.stringify(postToAdd),
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
			})
				.then(response => response.json())
				.then(post => successWindowOpen(post))
				.catch(error => errorWindowOpen(error));
		} catch (e) {
			errorWindowOpen(error);
		}
	}
}

refs.form.addEventListener('submit', formHandler);