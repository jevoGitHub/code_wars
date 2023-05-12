//This time no story, no theory. The examples below show you how to write function accum:

function accum(s) {
    const strArr = s.split("")
    let newArr = []
    for (let i = 0; i < strArr.length; i++) {
        newArr.push(strArr[i][0].toUpperCase() + strArr[i].toLowerCase().repeat(i))
    }
    return newArr.join("-")
}