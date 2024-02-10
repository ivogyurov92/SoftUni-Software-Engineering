function processOddNumbers(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            newArray.push(array[i]);
        }
    }

    newArray.reverse();
    newArray = newArray.map(x => x * 2);

    console.log(newArray.join(' '));
}

processOddNumbers([10, 15, 20, 25]);