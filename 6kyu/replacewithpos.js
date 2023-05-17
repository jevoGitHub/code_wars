//In this kata you are required to, given a string, replace every letter with its position in 
//the alphabet. If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    let result = "";

    let lowercaseText = text.toLowerCase();

    for (let i = 0; i < lowercaseText.length; i++) {
        let char = lowercaseText[i];

        if (/[a-z]/.test(char)) {
            let charCode = char.charCodeAt(0);
            let position = charCode - 96;
            result += position + " ";
        }
    }
    result = result.trim();
    return result;
}