// Defining all of the theme selection buttons

const lightSolButton = document.getElementById('theme-light-sol');
const darkSolButton = document.getElementById('theme-dark-sol');
const greenButton = document.getElementById('theme-green');
const lightGreyButton = document.getElementById('theme-light-grey');
const darkGreyButton = document.getElementById('theme-dark-grey');

// Selecting a theme based on what the user has in their browser's local storage

const theme = localStorage.getItem('theme');

if (theme) {
	var allThemedElements = document.querySelectorAll('.light-sol,.dark-sol,.green,.light-grey,.dark-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('light-sol');
		allThemedElements[i].classList.remove('dark-sol');
		allThemedElements[i].classList.remove('green');
		allThemedElements[i].classList.remove('light-grey');
		allThemedElements[i].classList.remove('dark-grey');
		allThemedElements[i].classList.add(theme);
	}
}

// Button event handlers
// These change all items that vary based on the theme to whichever theme was selected, and save the theme to local storage

lightSolButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.dark-sol,.green,.light-grey,.dark-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('dark-sol');
		allThemedElements[i].classList.remove('green');
		allThemedElements[i].classList.remove('light-grey');
		allThemedElements[i].classList.remove('dark-grey');
		allThemedElements[i].classList.add('light-sol');
	}
	localStorage.setItem('theme','light-sol');
}

darkSolButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.light-sol,.green,.light-grey,.dark-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('light-sol');
		allThemedElements[i].classList.remove('green');
		allThemedElements[i].classList.remove('light-grey');
		allThemedElements[i].classList.remove('dark-grey');
		allThemedElements[i].classList.add('dark-sol');
	}
	localStorage.setItem('theme','dark-sol');
}

greenButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.lightsol,.dark-sol,.light-grey,.dark-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('light-sol');
		allThemedElements[i].classList.remove('dark-sol');
		allThemedElements[i].classList.remove('light-grey');
		allThemedElements[i].classList.remove('dark-grey');
		allThemedElements[i].classList.add('green');
	}
	localStorage.setItem('theme','green');
}

lightGreyButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.light-sol,.dark-sol,.green,.dark-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('light-sol');
		allThemedElements[i].classList.remove('dark-sol');
		allThemedElements[i].classList.remove('green');
		allThemedElements[i].classList.remove('dark-grey');
		allThemedElements[i].classList.add('light-grey');
	}
	localStorage.setItem('theme','light-grey');
}

darkGreyButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.light-sol,.dark-sol,.green,.light-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('light-sol');
		allThemedElements[i].classList.remove('dark-sol');
		allThemedElements[i].classList.remove('green');
		allThemedElements[i].classList.remove('light-grey');
		allThemedElements[i].classList.add('dark-grey');
	}
	localStorage.setItem('theme','dark-grey');
}
