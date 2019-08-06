function weirdtestfunction() {
	document.getElementById("testground").innerHTML = "I changed a paragraph";
}

function othertestfunction() {
	var list_of_paragraphs = document.getElementsByTagName("p");
	var list_of_buttons = document.getElementsByTagName("button");
	list_of_paragraphs[1].innerHTML = "Let's see if this alters the dropdown menu.";
	document.getElementById("testground").innerHTML = "I changed a paragraph, or maybe several";
	list_of_buttons[*].innerHTML = "Also a couple buttons";
}
