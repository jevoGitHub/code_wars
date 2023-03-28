// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if(number % 2 === 0) {     // checking if even by making sure number is divisible by 2
      return(number *= 8)      // returning the even number multiplied by 8
    } else {                   // if number is anything but even
      return(number *= 9)      // returning the odd number multiplied by 9
    }
}
