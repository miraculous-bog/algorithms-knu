
const allowedNameCountry = [{ ua: 'Австрія', en: 'Austria' }, { ua: 'Бельгія', en: 'Belgium' }, { ua: 'Болгарія', en: 'Bulgaria' }, { ua: 'Хорватія', en: 'Croatia' }, { ua: 'Кіпр', en: 'Cyprus' }, { ua: 'Чехія', en: 'Czech Republic' }, { ua: 'Данія', en: 'Denmark' }, { ua: 'Естонія', en: 'Estonia' }, { ua: 'Фінляндія', en: 'Finland' }, { ua: 'Франція', en: 'France' }, { ua: 'Німеччина', en: 'Germany' }, { ua: 'Греція', en: 'Greece' }, { ua: 'Угорщина', en: 'Hungary' }, { ua: 'Ірландія', en: 'Ireland' }, { ua: 'Італія', en: 'Italy' }, { ua: 'Латвія', en: 'Latvia' }, { ua: 'Литва', en: 'Lithuania' }, { ua: 'Люксембург', en: 'Luxembourg' }, { ua: 'Мальта', en: 'Malta' }, { ua: 'Нідерланди', en: 'Netherlands' }, { ua: 'Польща', en: 'Poland' }, { ua: 'Португалія', en: 'Portugal' }, { ua: 'Румунія', en: 'Romania' }, { ua: 'Словаччина', en: 'Slovakia' }, { ua: 'Словенія', en: 'Slovenia' }, { ua: 'Іспанія', en: 'Spain' }, { ua: 'Швеція', en: 'Sweden' }, { ua: 'Україна', en: 'Ukraine' }, { ua: 'Ісландія', en: 'Sceland' }, { ua: 'Ліхтенштейн', en: 'Liechtenstein' }, { ua: 'Норвегія', en: 'Norway' }];
const DefaultValueSelectUa = 'Вибрати країну...';
const DefaultValueSelectEn = 'Choose country...';
let hash = window.location.hash;
hash = hash.substr(1);
const inpName = document.querySelector('#name').querySelector('input');
const inpEmail = document.querySelector('#email').querySelector('input');
hash === 'ua' ? inpName.placeholder = `Введіть Ім'я та прізвище` : inpName.placeholder = 'Enter first name and last name';
hash === 'ua' ? inpEmail.placeholder = `Введіть пошту` : inpEmail.placeholder = 'Enter your email';

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
	loader: document.querySelector('.loader'),
	fakeButton: document.querySelector('.fake-btn'),

}
const translateModal = {
	successFirstTitle: {
		ua: 'Дякуємо ! Ваші дані надіслані успішно !',
		en: 'Thank you! Your data has been sent successfully!',
	},
	successSecondTitle: {
		ua: `Найближчим часом, ми повідомимо, коли Ви зможете замовити брендовану карту від Global Ukraine.
		<br>Наша унікальна карта закодована на перемогу !`,
		en: `In the near future, we will inform you when you can order a branded card from Global Ukraine.<br>Our unique card is coded for victory!`,
	},
	successATitle: {
		ua: 'Завершити',
		en: 'Close',
	},
	errorFirstTitle: {
		ua: 'Щось пішло не так...',
		en: 'Opps...',
	},
	errorSecondTitle: {
		ua: 'Спробуйте ще раз',
		en: 'Smth went wrong!',
	},
	errorATitle: {
		ua: 'Спробувати',
		en: 'Close',
	}
}
refs.selectCustomTrigger.innerText = DefaultValueSelectLang;
const getSelectMurcup = () => {
	const customSortedFn = (a, b) => {
		let nameA = a[`${hash}`].toLowerCase();
		let nameB = b[`${hash}`].toLowerCase();
		return nameA.localeCompare(nameB);
	}
	const arrMurcupSelectItem = hash === 'ua' ? allowedNameCountry.sort(customSortedFn).map(item => `<div class="selectCustom-option">${item.ua}</div>`) : allowedNameCountry.sort(customSortedFn).map(item => `<div class="selectCustom-option">${item.en}</div>`);
	return arrMurcupSelectItem.join("");
}
refs.selectCustomOptions.innerHTML = getSelectMurcup();
const extractData = (formElement) => {
	let countryName = refs.selectCustomTrigger.innerText;
	hash !== 'ua' ? countryName = allowedNameCountry.find(item => item.en === countryName).ua : null;

	const name = formElement[0].value;
	const email = formElement[1].value;
	const country = countryName;

	const checkboxFirst = ['Індивідуальний (фізособа)', formElement[2].checked];
	const checkboxSecond = [' Корпоративний (ФОП)', formElement[3].checked];
	const captcha = document.querySelector("#g-recaptcha-response").value;
	return { name, email, country, checkboxFirst, checkboxSecond, captcha };
}
function getSecondsToday() {
	let now = new Date();
	let today = localStorage.getItem("time");

	let diff = now - today;
	const isDay = Math.round(diff / 1000 / 86400);
	if (isDay <= 1) return true;
	return false;
}

const formTimeRegulatorBefore = () => {
	if (localStorage.getItem('times') >= 3) {
		if (getSecondsToday()) {
			alert(`Ви вечерпали ліміт надсилання форм, ви знову змоежет надсилати через 24 год.`);
			return false;
		} else {
			localStorage.setItem('times', 1);
			localStorage.setItem('time', new Date());
		}
	}
	return true;
}
const formTimeRegulator = () => {
	if (localStorage.getItem('times') === null) {
		localStorage.setItem('times', 1);
		localStorage.setItem('time', new Date());
		return;
	}
	const currentTimes = localStorage.getItem('times');
	localStorage.setItem('times', Number(currentTimes) + 1);
}
const verifyName = (nameStr) => {
	if (nameStr.length === 0) {
		return hash === 'ua' ? 'Це поле не повинно бути пустим!' : 'This field must not be empty!';
	}
	if (/[0-9]/g.test(nameStr)) return hash === 'ua' ? 'Це поле не повинно містити числа!' : 'This field must not contain numbers!';
	const splitedName = nameStr.split(" ");

	if (splitedName.length === 1 || splitedName[0].length < 2 || splitedName[1].length < 2) return hash === 'ua' ? `Неправильний формат. І'мя та прізвище повинні бути в такому форматі: Гліб Українець` : 'Invalid format. The first and last name must be in the following format: Hlib Ukrainets';
	return false;
}
const verifyCountry = () => {
	if (refs.selectCustomTrigger.innerText === DefaultValueSelectLang) {
		return hash === 'ua' ? 'Виберіть країну!' : 'Choose country!';
	}
	return false;
}
const verifyCheckbox = (checkboxes) => {
	if (checkboxes.indexOf(true) === -1) return hash === 'ua' ? 'Виберіть хоча б один із запропонованих варіантів' : 'Choose at least one of the proposed options';
	return false;
}
const verifyCaptcha = (captchaValue) => {
	if (!captchaValue) return hash === 'ua' ? 'Підтвердіть Каптчу' : 'Check the CAPTCHA';
	return false;
}
const cleanErrors = (elementsToClean) => elementsToClean.forEach(item => item.innerText = '');

const getMurcup = (option) => {
	const dataRequest = {};
	if (option) {
		dataRequest.img = 'success-icon';
		dataRequest.alt = 'success';
		hash === 'ua' ? dataRequest.firstTitle = translateModal.successFirstTitle.ua : dataRequest.firstTitle = translateModal.successFirstTitle.en;
		hash === 'ua' ? dataRequest.secondTitle = translateModal.successSecondTitle.ua : dataRequest.secondTitle = translateModal.successSecondTitle.en;
		hash === 'ua' ? dataRequest.aTitle = translateModal.successATitle.ua : dataRequest.aTitle = translateModal.successATitle.en;
	} else {
		dataRequest.img = 'forbidden-icon';
		dataRequest.alt = 'error';
		hash === 'ua' ? dataRequest.firstTitle = translateModal.errorFirstTitle.ua : dataRequest.firstTitle = translateModal.errorFirstTitle.en;
		hash === 'ua' ? dataRequest.secondTitle = translateModal.errorSecondTitle.ua : dataRequest.secondTitle = translateModal.errorSecondTitle.en;
		hash === 'ua' ? dataRequest.aTitle = translateModal.errorATitle.ua : dataRequest.aTitle = translateModal.errorATitle.en;
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
		formTimeRegulator();
		refs.modalContent.innerHTML = getMurcup(true);
		refs.modal.style.opacity = 1;
	} else errorWindowOpen('error');
}



refs.fakeButton.onclick = function () {
	this.disabled = true;
}
const toggleLoader = (isWork) => {
	if (isWork) {
		refs.loader.style.display = 'block';
		refs.formButton.style.display = 'none';
		refs.fakeButton.style.display = 'block';
	} else {
		refs.loader.style.display = 'none';
		refs.fakeButton.style.display = 'none';
		refs.formButton.style.display = 'block';
	}
}
const cleanInputs = (form) => {
	form[0].value = '';
	form[1].value = '';
	form[2].checked = false;
	form[3].checked = false;
	refs.selectCustomTrigger.innerText = DefaultValueSelectLang;
}
const fetchPostData = (postToAdd, element) => {
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
			.catch(error => errorWindowOpen(error))
			.finally(() => {
				toggleLoader(false)
				cleanInputs(element);
			});
	} catch (e) {
		errorWindowOpen(error);
	}
}

const formHandler = (e) => {
	e.preventDefault();
	if (!formTimeRegulatorBefore()) return;
	const nameElement = document.querySelector('#name').querySelector('.error');
	const emailElement = document.querySelector('#email').querySelector('.error');
	const countryElement = document.querySelector('#country').querySelector('.error');
	const checkboxElement = document.querySelector('#checkbox').querySelector('.error');
	const captchaElement = document.querySelector('#captcha-container-custom-go').querySelector('.error');
	cleanErrors([nameElement, emailElement, countryElement, checkboxElement, captchaElement]);

	const element = e.currentTarget;
	console.dir(e.currentTarget);
	const data = extractData(element);

	const msgErrorName = verifyName(data.name);
	const msgErrorCountry = verifyCountry(data.country);
	const msgErrorCheckbox = verifyCheckbox([data.checkboxFirst[1], data.checkboxSecond[1]]);
	const msgErrorCaptcha = verifyCaptcha(data.captcha);


	msgErrorName ? nameElement.innerText = msgErrorName : null;
	msgErrorCountry ? countryElement.innerText = msgErrorCountry : null;
	msgErrorCheckbox ? checkboxElement.innerText = msgErrorCheckbox : null;
	msgErrorCaptcha ? captchaElement.innerText = msgErrorCaptcha : null;
	const accountArr = [data.checkboxFirst, data.checkboxSecond];
	let accountStr = accountArr.filter(item => item[1] === true);

	if (accountStr.length >= 2) {
		accountStr = `${accountStr[0][0]}, ${accountStr[1][0]}`;
	} else if (accountStr.length !== 0) accountStr = `${accountStr[0][0]}`

	const postToAdd = {
		name: data.name,
		email: data.email,
		country: data.country,
		account: accountStr,
	}
	if (!msgErrorName && !msgErrorCountry && !msgErrorCheckbox) {
		toggleLoader(true);

		const captchaObj = { captcha: data.captcha }
		fetch('https://global-ukraine-card.herokuapp.com/captcha/', {
			method: 'POST',
			body: JSON.stringify(captchaObj),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
		})
			.then(response => response.json())
			.then(post => {
				post.success ? fetchPostData(postToAdd, element) : errorWindowOpen(post.msg);
			}).catch(error => errorWindowOpen(error)).finally(() => {
				toggleLoader(false)
				cleanInputs(element);
			});
	}
}
refs.form.addEventListener('submit', formHandler);