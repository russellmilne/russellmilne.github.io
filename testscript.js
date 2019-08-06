function weirdtestfunction() {
	document.getElementById("testground").innerHTML = "I changed a paragraph";
}

function othertestfunction() {
	var plist = document.getElementsByTagName("p");
	var blist = document.getElementsByTagName("button");
	plist[1].innerHTML = "Let's see if this alters the dropdown menu.";
	for(i = 0; i < blist.length; i++) {
		blist[i].innerHTML = "Also a couple buttons";
		blist[i].style.backgroundColor = "green";
		blist[i].style.color = "red";
	}
}
