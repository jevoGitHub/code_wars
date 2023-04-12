// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    const numberArray = numbers.split(' ').map(Number);
    const highest = Math.max(...numberArray);
    const lowest = Math.min(...numberArray);
  
    return `${highest} ${lowest}`;
  }