//Given n, take the sum of the digits of n. If that value has more than one digit, 
//continue reducing in this way until a single-digit number is produced. 
//The input will be a non-negative integer.


function digitalRoot(n) {
    while (n > 9) {
        n = Array.from(String(n), Number).reduce((acc, curr) => acc + curr, 0);
    }
    return n;
}