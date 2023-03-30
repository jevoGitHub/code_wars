// You get an array of numbers, return the sum of all of the positives ones

function positiveSum(arr) {
    let arrSum = 0
    arr.forEach(x => {
        if(x > 0) {
            arrSum += x
        }
    })
    return arrSum
}
