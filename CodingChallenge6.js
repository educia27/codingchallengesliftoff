function detectWord(str) {
	let actualWord = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] == str[i].toLowerCase()) {
			actualWord += str[i];
		}
	}
	return actualWord;
}

//should return "cat";
console.log(detectWord("UcUNFYGaFYFYGtNUH"));