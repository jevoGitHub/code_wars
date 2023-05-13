// Write a function that will return the count of distinct case-insensitive alphabetic 
//characters and numeric digits that occur more than once in the input string. 
//The input string can be assumed to contain only alphabets (both uppercase and lowercase) and 
//numeric digits.

function duplicateCount(text) {
    let charCount = {};
    let count = 0;

    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (!char.match(/[a-z0-9]/i)) {
            continue;
        }

        charCount[char] = (charCount[char] || 0) + 1;

        if (charCount[char] === 2) {
            count++;
        }
    }
    return count;
}