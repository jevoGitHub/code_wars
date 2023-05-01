//An isogram is a word that has no repeating letters, 
//consecutive or non-consecutive. Implement a function that determines 
//whether a string that contains only letters is an isogram. 
//Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
    str = str.toLowerCase();
    const letters = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (/[a-z]/.test(char)) {
            if (letters[char]) {
                return false;
            }
            letters[char] = true;
        }
    }
    return true;
}