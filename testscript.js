function weirdtestfunction() {
	document.getElementById("testground").innerHTML = "I changed a paragraph"
}

function othertestfunction() {
	document.getElementsByTagName("p")[1].innerHTML = "Let's see if this alters the dropdown menu."
	document.getElementById("testground").innerHTML = "I changed a paragraph, or maybe several"
	document.getElementsByTagName("button")[*].innerHTML = "Also a couple buttons"
}
