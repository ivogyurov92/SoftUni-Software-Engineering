function condenseArrayToNumber(array) {
    let condensedArray = [];

    while (array.length > 1) {
        for (let i = 0; i < array.length - 1; i++) {
            condensedArray[i] = array[i] + array[i + 1];
        }

        array = condensedArray;
        condensedArray = [];
    }

    console.log(array.join(''));
}

condenseArrayToNumber([5, 0, 4, 1, 2])