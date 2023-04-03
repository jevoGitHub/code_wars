//Your task is to create a method, Math.roundTo(number, precision) which rounds a given number 
//to precision decimal places.

Math.roundTo = function (number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}
