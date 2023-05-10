//You are given an array (which will have a length of at least 3, but could be very large) 
//containing integers. The array is either entirely comprised of odd integers or entirely 
//comprised of even integers except for a single integer N. Write a method that takes the array 
//as an argument and returns this "outlier" N.

function findOutlier(integers) {
    let result1 = []
    let result2 = []

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            result1.push(integers[i])
        } else {
            result2.push(integers[i])
        }
    }
    return result1.length < result2.length ? Number(result1.join("")) : Number(result2.join(""))
}