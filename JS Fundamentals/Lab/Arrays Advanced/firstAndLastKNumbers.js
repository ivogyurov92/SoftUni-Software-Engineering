function firstAndLastNumbers(array) {
    let count = array[0];
    let firstNumbersArray = array.slice(1, count + 1);
    let lastNumbersArray = array.slice(array.length - count);

    console.log(firstNumbersArray.join(' '));
    console.log(lastNumbersArray.join(' '));
}

firstAndLastNumbers([2, 7, 8, 9]);