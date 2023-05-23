//Write a function, persistence, that takes in a positive parameter num and returns its 
//multiplicative persistence, which is the number of times you must multiply the digits 
//in num until you reach a single digit.

function persistence(num) {
    let persistenceCount = 0;

    while (num >= 10) {
        num = multiplyDigits(num);
        persistenceCount++;
    }

    return persistenceCount;
}

function multiplyDigits(num) {
    return num.toString().split('').reduce((a, b) => a * b, 1);
}