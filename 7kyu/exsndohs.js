//Check to see if a string has the same amount of 'x's and 'o's. The method must return 
//a boolean and be case insensitive. The string can contain any char.


function XO(str) {
    console.log(str)
    let regex1 = /[x]/gi
    let regex2 = /[o]/gi

    let result1 = str.toLowerCase().match(regex1) + 1
    let result2 = str.toLowerCase().match(regex2) + 1

    return result1.length == result2.length ? true : false
}