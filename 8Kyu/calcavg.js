//Write a function which calculates the average of the numbers in a given list

function findAverage(array) {
    let result = 0;
    if (array.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result / array.length;
    }
}