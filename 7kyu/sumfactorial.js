//In this kata you will be given a list of values that you must 
//first find the factorial, and then return their sum

function sumFactorial(arr) {
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += factorial(arr[i]);
    }
    return sum;
}