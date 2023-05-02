//Write a function that accepts an array of 10 integers (between 0 and 9), 
//that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
    let newArr = ["("]
    for (let i = 0; i < numbers.length; i++) {
        newArr.push(numbers[i])
    }
    newArr.splice(4, 0, ")")
    newArr.splice(5, 0, " ")
    newArr.splice(9, 0, "-")
    return newArr.join("")
}