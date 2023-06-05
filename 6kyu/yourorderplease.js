//Your task is to sort a given string. Each word in the string will contain a single number. 
//This number is the position the word should have in the result.
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//If the input string is empty, return an empty string. The words in the input String will 
//only contain valid consecutive numbers.

function order(words) {
    if (words === "") {
        return "";
    }

    const wordsArr = words.split(" ");
    const sortedWords = new Array(wordsArr.length);

    for (let i = 0; i < wordsArr.length; i++) {
        const word = wordsArr[i];
        const position = parseInt(word.match(/\d+/)[0]);
        sortedWords[position - 1] = word;
    }

    return sortedWords.join(" ");
}