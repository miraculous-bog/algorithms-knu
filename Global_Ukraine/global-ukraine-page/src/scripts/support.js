const mobileBtn = document.querySelector(".back-button");
const supportBtn = document.querySelector(".callback-bt");
const bar = document.querySelector(".support-bar");
bar.style.display = "none";

mobileBtn.addEventListener("click", function () {
	bar.style.display = "none";
});

supportBtn.addEventListener("click", function () {
	let barState = bar.style.display;
	if (barState === 'none') {
		bar.style.display = "block";
	} else {
		bar.style.display = "none";
	}
});