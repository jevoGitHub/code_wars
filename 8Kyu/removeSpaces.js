// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    // declare variable for number
    let initialString = x
    // removing spaces by splitting the text then re-joining them
    let newString = initialString.split(" ").join("")
    // return new string with no spaces
    return(newString)
}
  
noSpace("This is a String");