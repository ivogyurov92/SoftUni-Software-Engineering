function printElement(array) {
    let lastNum = array.pop();
    let resultArray = [];

    for (let index in array) {
        if (index % lastNum === 0) {
            resultArray.push(array[index]);
        }
    }

    console.log(resultArray.join(' '));
}

printElement(['5', '20', '31', '4', '20', '2']);