// Defining all of the theme selection buttons

const lightSolButton = document.getElementById('theme-light-sol');
const darkSolButton = document.getElementById('theme-dark-sol');
const lightGreyButton = document.getElementById('theme-light-grey');
const darkGreyButton = document.getElementById('theme-dark-grey');

// Button event handlers

lightSolButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.dark-sol,.light-grey,.dark-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('dark-sol')
		allThemedElements[i].classList.remove('light-grey')
		allThemedElements[i].classList.remove('dark-grey')
		allThemedElements[i].classList.add('light-sol')
	}
}

darkSolButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.light-sol,.light-grey,.dark-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('light-sol')
		allThemedElements[i].classList.remove('light-grey')
		allThemedElements[i].classList.remove('dark-grey')
		allThemedElements[i].classList.add('dark-sol')
	}
}

lightGreyButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.light-sol,.dark-sol,.dark-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('light-sol')
		allThemedElements[i].classList.remove('dark-sol')
		allThemedElements[i].classList.remove('dark-grey')
		allThemedElements[i].classList.add('light-grey')
	}
}

darkGreyButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.light-sol,.dark-sol,.light-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('light-sol')
		allThemedElements[i].classList.remove('dark-sol')
		allThemedElements[i].classList.remove('light-grey')
		allThemedElements[i].classList.add('dark-grey')
	}
}
