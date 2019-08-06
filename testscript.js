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

function add_these_two_numbers() {
	var numform = document.getElementById("testform");
	var numlist = numform.querySelectorAll("input[type=number]");
	var firstnum = numlist[0].value;
	var secondnum = numlist[1].value;
	var sum_of_nums = firstnum + secondnum;
	document.getElementById("resultdump").innerHTML = sum_of_nums.toString();
}
