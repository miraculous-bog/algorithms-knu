const anchors = document.querySelectorAll('.enrrol-form')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		document.querySelector('.form-data').scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}