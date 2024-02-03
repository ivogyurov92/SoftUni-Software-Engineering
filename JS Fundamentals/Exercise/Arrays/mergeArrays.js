function mergeArrays(firstArray, secondArray) {
    let thirdArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        let firstArrayElement = firstArray[i];
        let secondArrayElement = secondArray[i];

        if (i % 2 == 0) {
            thirdArray.push(Number(firstArrayElement) + Number(secondArrayElement));
        } else{
            thirdArray.push(firstArrayElement + secondArrayElement);
        }
    }

    console.log(thirdArray.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);