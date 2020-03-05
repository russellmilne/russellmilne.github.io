function to_pl (inputIPAArray) {

	var translatedArray = new Array(inputIPAArray.length);

	var destressRegex = /[^͡  ˈˌː]+/g; // This also gets rid of that semicircle above pairs of letters, which may or may not be a good thing
	// The colon ː right after a vowel means that that vowel is long. Polish doesn't have vowel length (although Czech does), so I remove it.

	for (i = 0; i < inputIPAArray.length; i++) {
		var tempWord = "";
		var syllables = inputIPAArray[i].match(destressRegex);
		for (h = 0; h < syllables.length; h++) {
			tempWord = tempWord.concat(syllables[h]);
		}
		var outputWord = "";

		for (j = 0; j < tempWord.length; j++) {

			console.log(tempWord.charAt(j));

			//

			if (tempWord.charAt(j) == "b" || tempWord.charAt(j) == "a" || tempWord.charAt(j) == "k" || tempWord.charAt(j) == "z" || tempWord.charAt(j) == "ɡ" || tempWord.charAt(j) == "d" || tempWord.charAt(j) == "i" || tempWord.charAt(j) == "p") {
				outputWord = outputWord.concat(tempWord.charAt(j)); // These are the same in Polish as in IPA
			}
			else if (tempWord.charAt(j) == "ʊ" || tempWord.charAt(j) == "u") {
				if ((j > 0) && (tempWord.charAt(j-1) == "o")) {
					outputWord = outputWord.concat(""); // "ou" is rendered as "oł" since this isn't Czech
				}
				else {
					if (((j + 1) < tempWord.length) && (tempWord.charAt(j+1) == "f" || tempWord.charAt(j+1) == "v")) {
						outputWord = outputWord.concat("ó"); // To create "ów" rather than "uf" or "uw"
					}
					else {
						outputWord = outputWord.concat("u");
					}
				}
			}
			else if (tempWord.charAt(j) == "t") {
				if (((j + 1) < tempWord.length) && (tempWord.charAt(j+1) == "ʃ" || tempWord.charAt(j+1) == "s")) {
					outputWord = outputWord.concat(""); // t before sz makes cz (and is therefore not printed)
				}
				else {
					outputWord = outputWord.concat("t");
				}
			}
			else if (tempWord.charAt(j) == "ə") {
				if (((j + 1) < tempWord.length) && (tempWord.charAt(j+1) == "n" || tempWord.charAt(j+1) == "ŋ")) {
					if ((j > 0) && (tempWord.charAt(j-1) == "i")) {
						outputWord = outputWord.concat("jy"); // "iy" is unnatural, "ijy" slightly less so
					}
					else {
						outputWord = outputWord.concat("y");
					}
				}
				else {
					outputWord = outputWord.concat("a"); // The schwa is closest to Polish a, although "yn" looks nicer than "an" in this case
				}
			}
			else if (tempWord.charAt(j) == "ɔ" || tempWord.charAt(j) == "ɑ") { // Cot-caught merger
				if ((j + 2) < tempWord.length) {
					if ((tempWord.charAt(j+1) == "n") && (tempWord.charAt(j+2) == "t" || tempWord.charAt(j+2) == "d")) {
						outputWord = outputWord.concat("ą"); // Trójkąt, pieniądz
					}
					else if ((tempWord.charAt(j+1) == "ŋ") && (tempWord.charAt(j+2) == "k" || tempWord.charAt(j+2) == "g")) {
						outputWord = outputWord.concat("ą"); // Bąk, chorągiew
					}
					else if ((tempWord.charAt(j+1) == "m") && (tempWord.charAt(j+2) == "p" || tempWord.charAt(j+2) == "b")) {
						outputWord = outputWord.concat("ą"); // Kąpiel, gołąb
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
				if ((j > 0) && (tempWord.charAt(j-1) == "t")) {
					outputWord = outputWord.concat("c"); // "ts" = "c"
				}
				else {
					outputWord = outputWord.concat("s");
				}
			}
			else if (tempWord.charAt(j) == "m") {
				if (((j + 1) < tempWord.length) && (tempWord.charAt(j+1) == "p" || tempWord.charAt(j+1) == "b") && (j > 0) && (tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "ɔ" || tempWord.charAt(j-1) == "ɑ")) {
					outputWord = outputWord.concat(""); // m gets dropped if it's part of ą or ę
				}
				else {
					outputWord = outputWord.concat("m");
				}
			}
			else if (tempWord.charAt(j) == "f") {
				if ((j > 0) && (tempWord.charAt(j-1) == "a" || tempWord.charAt(j-1) == "ʊ" || tempWord.charAt(j-1) == "u" || tempWord.charAt(j-1) == "ɔ" || tempWord.charAt(j-1) == "ɑ" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "ɪ")) {
					outputWord = outputWord.concat("w"); // w looks more natural after a vowel
				}
				else {
					outputWord = outputWord.concat("f");
				}
			}
			else if (tempWord.charAt(j) == "ɪ") {
				if ((j > 0) && (tempWord.charAt(j-1) == "a" || tempWord.charAt(j-1) == "ʊ" || tempWord.charAt(j-1) == "u" || tempWord.charAt(j-1) == "ɔ" || tempWord.charAt(j-1) == "ɑ" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "æ")) {
					outputWord = outputWord.concat("j"); // j is used after vowels to make the "ei", "ai", etc. sound; only exception I can think of is "Zamoyski"
				}
				else {
					if ((j > 0) && (tempWord.charAt(j-1) == "i")) {
						outputWord = outputWord.concat("jy"); // "iy" is unnatural, "ijy" slightly less so
					}
					else {
						outputWord = outputWord.concat("y");
					}
				}
			}
			else if (tempWord.charAt(j) == "o") {
				if (((j + 1) < tempWord.length) && (tempWord.charAt(j+1) == "ʊ" || tempWord.charAt(j+1) == "u")) {
					outputWord = outputWord.concat("oł"); // "ou" is rendered as "oł" since this isn't Czech
				}
				else {
					outputWord = outputWord.concat("o");
				}
			}
			else if (tempWord.charAt(j) == "ɛ" || tempWord.charAt(j) == "e" || tempWord.charAt(j) == "æ") {
				if ((j + 2) < tempWord.length) {
					if ((tempWord.charAt(j+1) == "n") && (tempWord.charAt(j+2) == "t" || tempWord.charAt(j+2) == "d")) {
						outputWord = outputWord.concat("ę"); // Przeciętny & wędlina
					}
					else if ((tempWord.charAt(j+1) == "ŋ") && (tempWord.charAt(j+2) == "k" || tempWord.charAt(j+2) == "g")) {
						outputWord = outputWord.concat("ę"); // Piękny & okręg
					}
					else if ((tempWord.charAt(j+1) == "m") && (tempWord.charAt(j+2) == "p" || tempWord.charAt(j+2) == "b")) {
						outputWord = outputWord.concat("ę"); // Tępy & Jastrzębie-Zdrój
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
				if (((j + 1) < tempWord.length) && (tempWord.charAt(j+1) == "j")) {
					outputWord = outputWord.concat("ń"); // If followed by j, n turns into ń
				}
				else if (((j + 1) < tempWord.length) && (tempWord.charAt(j+1) == "t" || tempWord.charAt(j+1) == "d") && (j > 0) && (tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "ɔ" || tempWord.charAt(j-1) == "ɑ")) {
					outputWord = outputWord.concat(""); // If it's part of ą or ę, nothing is printed
				}
				else {
					outputWord = outputWord.concat("n"); // Otherwise, it remains as n
				}
			}
			else if (tempWord.charAt(j) == "ɫ") {
				outputWord = outputWord.concat("l");
			}
			else if (tempWord.charAt(j) == "w") {
				outputWord = outputWord.concat("ł");
			}
			else if (tempWord.charAt(j) == "ɝ") {
				outputWord = outputWord.concat("er");
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
				if (((j + 1) < tempWord.length) && (tempWord.charAt(j+1) == "k" || tempWord.charAt(j+1) == "g") && (j > 0) && (tempWord.charAt(j-1) == "e" || tempWord.charAt(j-1) == "ɛ" || tempWord.charAt(j-1) == "æ" || tempWord.charAt(j-1) == "ɔ" || tempWord.charAt(j-1) == "ɑ")) {
					outputWord = outputWord.concat(""); // "ng" often gets absorbed by ą or ę, for instance when followed by k/g (e.g. piękny)
				}
				else {
					outputWord = outputWord.concat("ng");
				}
			}
			else if (tempWord.charAt(j) == "ʃ") {
				if ((j > 0) && (tempWord.charAt(j-1) == "t")) {
					outputWord = outputWord.concat("cz"); // "ci" and "ć" are a different sound, which is farther away from English
				}
				else {
					outputWord = outputWord.concat("sz"); // t before sz makes cz, otherwise it remains sz
				}
			}
			else if (tempWord.charAt(j) == "ʒ") {
				if (((j + 1) < tempWord.length) && (tempWord.charAt(j+1) == "i")) {
					outputWord = outputWord.concat("z"); // "zi" has the same sound as "ż"
				}
				else {
					outputWord = outputWord.concat("ż");
				}
			}
			else if (tempWord.charAt(j) == "ð") {
				outputWord = outputWord.concat("d");
			}
			else if (tempWord.charAt(j) == "j") {
				if ((j > 0) && (tempWord.charAt(j-1) == "n")) {
					outputWord = outputWord.concat(""); // No need to output anything if j has been assimilated into ń
				}
				else {
					outputWord = outputWord.concat("j");
				}
			}
			else {
				outputWord = outputWord.concat("*");
			}

			//
		}

		translatedArray[i] = outputWord;

		//translatedArray[i] = tempWord;
	}

	return translatedArray;
	
	
}
