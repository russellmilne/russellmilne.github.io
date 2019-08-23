function to_pl (inputIPAArray) {
	var translatedArray = new Array(inputIPAArray.length);

	var destressRegex = /[^ ˈˌ]+/g;

	for (i = 0; i < inputIPAArray.length; i++) {
		var tempWord = "";
		var syllables = inputIPAArray[i].match(destressRegex);
		for (h = 0; h < syllables.length; h++) {
			tempWord = tempWord.concat(syllables[h]);
		}
		var outputWord = "";

		for (j = 0; j < tempWord.length; j++) {
			switch (tempWord.charAt(j)) {
				case "ˈ":
					break;
				case "b":
					outputWord = outputWord.concat("b");
					break;
				case "a":
					outputWord = outputWord.concat("a");
					break;
				case "ʊ":
					if ((j + 1) < tempWord.length) {
						if (tempWord.charAt(j+1) == "f" || tempWord.charAt(j+1) == "v") {
							outputWord = outputWord.concat("ó");
						}
						else {
							outputWord = outputWord.concat("u");
						}
					}
					else {
						outputWord = outputWord.concat("u");
					}
					break;
				case "t":
					if ((j + 1) < tempWord.length) {
						if (tempWord.charAt(j+1) == "ʃ" || tempWord.charAt(j+1) == "s") {
							outputWord = outputWord.concat("");
						}
						else {
							outputWord = outputWord.concat("t");
						}
					}
					else {
						outputWord = outputWord.concat("t");
					}
					break;
				case "k":
					outputWord = outputWord.concat("k");
					break;
				case "ə":
					if ((j + 1) < tempWord.length) {
						if (tempWord.charAt(j+1) == "n" || tempWord.charAt(j+1) == "ŋ") {
							outputWord = outputWord.concat("y");
						}
						else {
							outputWord = outputWord.concat("a");
						}
					}
					else {
						outputWord = outputWord.concat("a");
					}
					break;
				case "z":
					outputWord = outputWord.concat("z");
					break;
				case "ɔ":
					if ((j + 2) < tempWord.length) {
						if (tempWord.charAt(j+1) == "n") {
							if (tempWord.charAt(j+2) == "t" || tempWord.charAt(j+2) == "d") {
								outputWord = outputWord.concat("ą");
							}
							else {
								outputWord = outputWord.concat("o");
							}
						}
						else if (tempWord.charAt(j+1) == "ŋ") {
							if (tempWord.charAt(j+2) == "k" || tempWord.charAt(j+2) == "g") {
								outputWord = outputWord.concat("ą");
							}
							else {
								outputWord = outputWord.concat("o");
							}
						}
						else if (tempWord.charAt(j+1) == "m") {
							if (tempWord.charAt(j+2) == "p" || tempWord.charAt(j+2) == "b") {
								outputWord = outputWord.concat("ą");
							}
							else {
								outputWord = outputWord.concat("o");
							}
						}
						else {
							outputWord = outputWord.concat("o");
						}
					}
					else {
						outputWord = outputWord.concat("o");
					}
					break;
				case "ɹ":
					outputWord = outputWord.concat("r");
					break;
				case "s":
					if (j > 0) {
						if (tempWord.charAt(j-1) == "t") {
							outputWord = outputWord.concat("c");
						}
						else {
							outputWord = outputWord.concat("s");
						}
					}
					else {
						outputWord = outputWord.concat("s");
					}
					break;
				case "j":
					outputWord = outputWord.concat("j");
					break;
				case "u":
					if ((j + 1) < tempWord.length) {
						if (tempWord.charAt(j+1) == "f" || tempWord.charAt(j+1) == "v") {
							outputWord = outputWord.concat("ó");
						}
						else {
							outputWord = outputWord.concat("u");
						}
					}
					else {
						outputWord = outputWord.concat("u");
					}
					break;
				case "m":
					if ((j + 1) < tempWord.length) {
						if (tempWord.charAt(j+1) == "p" || tempWord.charAt(j+1) == "b") {
							if (j > 0) {
								if (tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "ɔ") {
									outputWord = outputWord.concat("");
								}
								else {
									outputWord = outputWord.concat("m");
								}
							}
							else {
								outputWord = outputWord.concat("m");
							}
						}
						else {
							outputWord = outputWord.concat("m");
						}
					}
					else {
						outputWord = outputWord.concat("m");
					}
					break;
				case "f":
					if (j > 0) {
						if (tempWord.charAt(j-1) == "a" || tempWord.charAt(j-1) == "ʊ" || tempWord.charAt(j-1) == "u" || tempWord.charAt(j-1) == "ɔ" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "ɪ") {
							outputWord = outputWord.concat("w");
						}
						else {
							outputWord = outputWord.concat("f");
						}
					}
					else {
						outputWord = outputWord.concat("f");
					}
					break;
				case "ɪ":
					if (j > 0) {
						if (tempWord.charAt(j-1) == "a" || tempWord.charAt(j-1) == "ʊ" || tempWord.charAt(j-1) == "u" || tempWord.charAt(j-1) == "ɔ" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "æ") {
							outputWord = outputWord.concat("j");
						}
						else {
							outputWord = outputWord.concat("y");
						}
					}
					else {
						outputWord = outputWord.concat("y");
					}
					break;
				case "o":
					outputWord = outputWord.concat("oł");
					break;
				case "ɡ":
					outputWord = outputWord.concat("g");
					break;
				case "ɛ":
					if ((j + 2) < tempWord.length) {
						if (tempWord.charAt(j+1) == "n") {
							if (tempWord.charAt(j+2) == "t" || tempWord.charAt(j+2) == "d") {
								outputWord = outputWord.concat("ę");
							}
							else {
								outputWord = outputWord.concat("e");
							}
						}
						else if (tempWord.charAt(j+1) == "ŋ") {
							if (tempWord.charAt(j+2) == "k" || tempWord.charAt(j+2) == "g") {
								outputWord = outputWord.concat("ę");
							}
							else {
								outputWord = outputWord.concat("e");
							}
						}
						else if (tempWord.charAt(j+1) == "m") {
							if (tempWord.charAt(j+2) == "p" || tempWord.charAt(j+2) == "b") {
								outputWord = outputWord.concat("ę");
							}
							else {
								outputWord = outputWord.concat("e");
							}
						}
						else {
							outputWord = outputWord.concat("e");
						}
					}
					else {
						outputWord = outputWord.concat("e");
					}
					break;
				case "n":
					if ((j + 1) < tempWord.length) {
						if (tempWord.charAt(j+1) == "j") {
							outputWord = outputWord.concat("ń");
						}
						else if (tempWord.charAt(j+1) == "t" || tempWord.charAt(j+1) == "d") {
							if (j > 0) {
								if (tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "ɔ") {
									outputWord = outputWord.concat("");
								}
								else {
									outputWord = outputWord.concat("n");
								}
							}
							else {
								outputWord = outputWord.concat("n");
							}
						}
						else {
							outputWord = outputWord.concat("n");
						}
					}
					else {
						outputWord = outputWord.concat("n");
					}
					break;
				case "e":
					if ((j + 2) < tempWord.length) {
						if (tempWord.charAt(j+1) == "n") {
							if (tempWord.charAt(j+2) == "t" || tempWord.charAt(j+2) == "d") {
								outputWord = outputWord.concat("ę");
							}
							else {
								outputWord = outputWord.concat("e");
							}
						}
						else if (tempWord.charAt(j+1) == "ŋ") {
							if (tempWord.charAt(j+2) == "k" || tempWord.charAt(j+2) == "g") {
								outputWord = outputWord.concat("ę");
							}
							else {
								outputWord = outputWord.concat("e");
							}
						}
						else if (tempWord.charAt(j+1) == "m") {
							if (tempWord.charAt(j+2) == "p" || tempWord.charAt(j+2) == "b") {
								outputWord = outputWord.concat("ę");
							}
							else {
								outputWord = outputWord.concat("e");
							}
						}
						else {
							outputWord = outputWord.concat("e");
						}
					}
					else {
						outputWord = outputWord.concat("e");
					}
					break;
				case "d":
					outputWord = outputWord.concat("d");
					break;
				case "ɫ":
					outputWord = outputWord.concat("l");
					break;
				case "w":
					outputWord = outputWord.concat("ł");
					break;
				case "i":
					outputWord = outputWord.concat("i");
					break;
				case "p":
					outputWord = outputWord.concat("p");
					break;
				case "ɑ":
					outputWord = outputWord.concat("a");
					break;
				case "ɝ":
					outputWord = outputWord.concat("yr");
					break;
				case "θ":
					outputWord = outputWord.concat("t");
					break;
				case "v":
					outputWord = outputWord.concat("w");
					break;
				case "h":
					outputWord = outputWord.concat("ch");
					break;
				case "æ":
					if ((j + 2) < tempWord.length) {
						if (tempWord.charAt(j+1) == "n") {
							if (tempWord.charAt(j+2) == "t" || tempWord.charAt(j+2) == "d") {
								outputWord = outputWord.concat("ę");
							}
							else {
								outputWord = outputWord.concat("e");
							}
						}
						else if (tempWord.charAt(j+1) == "ŋ") {
							if (tempWord.charAt(j+2) == "k" || tempWord.charAt(j+2) == "g") {
								outputWord = outputWord.concat("ę");
							}
							else {
								outputWord = outputWord.concat("e");
							}
						}
						else if (tempWord.charAt(j+1) == "m") {
							if (tempWord.charAt(j+2) == "p" || tempWord.charAt(j+2) == "b") {
								outputWord = outputWord.concat("ę");
							}
							else {
								outputWord = outputWord.concat("e");
							}
						}
						else {
							outputWord = outputWord.concat("e");
						}
					}
					else {
						outputWord = outputWord.concat("e");
					}
					break;
				case "ŋ":
					if ((j + 1) < tempWord.length) {
						if (tempWord.charAt(j+1) == "k" || tempWord.charAt(j+1) == "g") {
							if (j > 0) {
								if (tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "ɔ") {
									outputWord = outputWord.concat("");
								}
								else {
									outputWord = outputWord.concat("n");
								}
							}
							else {
								outputWord = outputWord.concat("n");
							}
						}
						else {
							outputWord = outputWord.concat("n");
						}
					}
					else {
						outputWord = outputWord.concat("n");
					}
					break;
				case "ʃ":
					if (j > 0) {
						if (tempWord.charAt(j-1) == "t") {
							if ((j + 1) < tempWord.length) {
								if (tempWord.charAt(j+1) == "i") {
									outputWord = outputWord.concat("c");
								}
								else {
									outputWord = outputWord.concat("cz");
								}
							}
							else {
								outputWord = outputWord.concat("cz");
							}
						}
						else {
							if ((j + 1) < tempWord.length) {
								if (tempWord.charAt(j+1) == "i") {
									outputWord = outputWord.concat("s");
								}
								else {
									outputWord = outputWord.concat("sz");
								}
							}
							else {
								outputWord = outputWord.concat("sz");
							}
						}
					}
					else {
						outputWord = outputWord.concat("sz");
					}
					break;
				case "ʒ":
					if ((j + 1) < tempWord.length) {
						if (tempWord.charAt(j+1) == "i") {
							outputWord = outputWord.concat("z");
						}
						else {
							if (j > 0) {
								if (tempWord.charAt(j-1) == "ɫ" || tempWord.charAt(j-1) == "w" || tempWord.charAt(j-1) == "ɹ" || tempWord.charAt(j-1) == "n" || tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "a" || tempWord.charAt(j-1) == "ɑ" || tempWord.charAt(j-1) == "ə" || tempWord.charAt(j-1) == "ɪ") {
									outputWord = outputWord.concat("ż");
								}
								else {
									outputWord = outputWord.concat("rz");
								}
							}
							else {
								outputWord = outputWord.concat("rz");
							}
						}
					}
					else {
						if (j > 0) {
							if (tempWord.charAt(j-1) == "ɫ" || tempWord.charAt(j-1) == "w" || tempWord.charAt(j-1) == "ɹ" || tempWord.charAt(j-1) == "n" || tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "a" || tempWord.charAt(j-1) == "ɑ" || tempWord.charAt(j-1) == "ə" || tempWord.charAt(j-1) == "ɪ") {
								outputWord = outputWord.concat("ż");
							}
							else {
								outputWord = outputWord.concat("rz");
							}
						}
						else {
							outputWord = outputWord.concat("rz");
						}
					}
					break;
				case "ð":
					outputWord = outputWord.concat("d");
					break;
				default:
					outputWord = outputWord.concat("*");
			}
		}
	}
}
