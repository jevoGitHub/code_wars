//Given two integers a and b, which can be positive or negative, 
//find the sum of all the integers between and including them and return it. 
//If the two numbers are equal return a or b.

function getSum(a, b) {
    if (a === b) {
        return a
    } else if (a > b) {
        [a, b] = [b, a];
    }

    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}