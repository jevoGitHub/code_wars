//The goal of this exercise is to convert a string to a new string where each character 
//in the new string is "(" if that character appears only once in the original string, 
//or ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
    let lowercaseStr = word.toLowerCase();
    let result = '';

    for (let i = 0; i < lowercaseStr.length; i++) {
        if (lowercaseStr.indexOf(lowercaseStr[i]) === lowercaseStr.lastIndexOf(lowercaseStr[i])) {
            result += '(';
        } else {
            result += ')';
        }
    }

    return result;
}