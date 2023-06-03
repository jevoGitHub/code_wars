//Write an algorithm that takes an array and moves all of the zeros to the end, 
//preserving the order of the other elements.

function moveZeros(arr) {
    let finalArr = []
    let zeroesArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroesArr.push(arr[i])
        } else {
            finalArr.push(arr[i])
        }
    }

    for (let i = 0; i < zeroesArr.length; i++) {
        finalArr.push(zeroesArr[i])
    }

    return finalArr
}