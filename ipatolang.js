function to_pl (inputIPAArray) {
	var translatedArray = new Array(inputIPAArray.length);

	//var destressRegex = /[^ ˈˌ]+/g;

	for (i = 0; i < inputIPAArray.length; i++) {
		//var tempWord = "";
		//var syllables = inputIPAArray[i].match(destressRegex);
		//for (h = 0; h < syllables.length; h++) {
		//	tempWord = tempWord.concat(syllables[h]);
		//}
		var tempWord = inputIPAArray[i];
		var outputWord = "";

		for (j = 0; j < tempWord.length; j++) {
			if (tempWord.charAt(j) == "b" || tempWord.charAt(j) == "a" || tempWord.charAt(j) == "k" || tempWord.charAt(j) == "z" || tempWord.charAt(j) == "j" || tempWord.charAt(j) == "g" || tempWord.charAt(j) == "d" || tempWord.charAt(j) == "i" || tempWord.charAt(j) == "p") {
				outputWord = outputWord.concat(tempWord.charAt(j));
			}
			else if (tempWord.charAt(j) == "ʊ" || tempWord.charAt(j) == "u") {
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
			}
			else if (tempWord.charAt(j) == "t") {
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
			}
			else if (tempWord.charAt(j) == "ə") {
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
			}
			else if (tempWord.charAt(j) == "ɔ") {
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
			}
			else if (tempWord.charAt(j) == "ɹ") {
				outputWord = outputWord.concat("r");
			}
			else if (tempWord.charAt(j) == "s") {
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
			}
			else if (tempWord.charAt(j) == "m") {
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
			}
			else if (tempWord.charAt(j) == "f") {
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
			}
			else if (tempWord.charAt(j) == "ɪ") {
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
			}
			else if (tempWord.charAt(j) == "o") {
				outputWord = outputWord.concat("oł");
			}
			else if (tempWord.charAt(j) == "ɛ" || tempWord.charAt(j) == "e" || tempWord.charAt(j) == "æ") {
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
			}
			else if (tempWord.charAt(j) == "n") {
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
			}
			else if (tempWord.charAt(j) == "ɫ") {
				outputWord = outputWord.concat("l");
			}
			else if (tempWord.charAt(j) == "w") {
				outputWord = outputWord.concat("ł");
			}
			else if (tempWord.charAt(j) == "ɑ") {
				outputWord = outputWord.concat("a");
			}
			else if (tempWord.charAt(j) == "ɝ") {
				outputWord = outputWord.concat("yr");
			}
			else if (tempWord.charAt(j) == "θ") {
				outputWord = outputWord.concat("t");
			}
			else if (tempWord.charAt(j) == "v") {
				outputWord = outputWord.concat("w");
			}
			else if (tempWord.charAt(j) == "h") {
				outputWord = outputWord.concat("ch");
			}
			else if (tempWord.charAt(j) == "ŋ") {
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
			}
			else if (tempWord.charAt(j) == "ʃ") {
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
			}
			else if (tempWord.charAt(j) == "ʒ") {
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
			}
			else if (tempWord.charAt(j) == "ð") {
				outputWord = outputWord.concat("d");
			}
			else {
				outputWord = outputWord.concat("*");
			}
		}

		translatedArray[i] = outputWord;
	}

	return translatedArray;
}
