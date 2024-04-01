// Defining all of the theme selection buttons

const lightSolButton = document.getElementById('theme-light-sol');
const darkSolButton = document.getElementById('theme-dark-sol');
const greenButton = document.getElementById('theme-green');
const lightGreyButton = document.getElementById('theme-light-grey');
const darkGreyButton = document.getElementById('theme-dark-grey');

const lightSolTextButton = document.getElementById('theme-light-sol-text');
const darkSolTextButton = document.getElementById('theme-dark-sol-text');
const greenTextButton = document.getElementById('theme-green-text');
const lightGreyTextButton = document.getElementById('theme-light-grey-text');
const darkGreyTextButton = document.getElementById('theme-dark-grey-text');

// Defining the two overlays

const themeSelectorOverlay = document.getElementById('theme-overlay');
const hamburgerOverlay = document.getElementById('hamburger-overlay');

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
	var allThemedElements = document.querySelectorAll('.light-sol,.dark-sol,.light-grey,.dark-grey');
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

// Event handlers for the text buttons (the ones featuring the theme names), which do the same things

lightSolTextButton.onclick = () => {
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

darkSolTextButton.onclick = () => {
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

greenTextButton.onclick = () => {
	var allThemedElements = document.querySelectorAll('.light-sol,.dark-sol,.light-grey,.dark-grey');
	for (var i = 0; i < allThemedElements.length; i++) {
		allThemedElements[i].classList.remove('light-sol');
		allThemedElements[i].classList.remove('dark-sol');
		allThemedElements[i].classList.remove('light-grey');
		allThemedElements[i].classList.remove('dark-grey');
		allThemedElements[i].classList.add('green');
	}
	localStorage.setItem('theme','green');
}

lightGreyTextButton.onclick = () => {
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

darkGreyTextButton.onclick = () => {
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

// Event handlers for the overlays.
// They should uncheck their associated checkboxes when clicked

themeSelectorOverlay.onclick = () => {
	document.getElementById('theme-checkbox').checked = false;
}

hamburgerOverlay.onclick = () => {
	document.getElementById('hamburger-checkbox').checked = false;
}
