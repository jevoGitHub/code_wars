//Create a function that takes a positive integer and returns the next bigger number 
//that can be formed by rearranging its digits.

function nextBigger(n) {
    const digits = n.toString().split('').map(Number);

    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    if (i < 0) {
        return -1;
    }

    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }

    [digits[i], digits[j]] = [digits[j], digits[i]];

    const reversed = digits.slice(i + 1).reverse();
    const result = parseInt(digits.slice(0, i + 1).concat(reversed).join(''));

    return result;
}