// поиск слова из массива по его части
function findWordContaining(inputWord, wordsArray) {
	for (let i = 0; i < wordsArray.length; i++) {
		if (wordsArray[i].includes(inputWord)) {
			return wordsArray[i];
		}
	}
	return "Word not found";
}

console.log(findWordContaining("ow", ["The", "quick", "brown", "fox"]));



// поиск слова из строки по его части
function findWordInString(str, part) {
	const words = str.split(' ');
	for (let i = 0; i < words.length; i++) {
		if (words[i].includes(part)) {
			return words[i];
		}
	}
	return 'Word not found';
}

console.log(findWordInString("The quick brown fox", "ui"));



// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.

// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
