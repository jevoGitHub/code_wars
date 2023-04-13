//Given an integral number, determine if it's a square number:

var isSquare = function (n) {
    let sqrtOfNum = Math.sqrt(n)
    if (!Number.isInteger(sqrtOfNum) && sqrtOfNum !== 0) {
        return false;
    } else {
        return true;
    }
}