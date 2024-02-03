function equalArrays(firstArray, secondArray) {
    let index = 0;

    for (let i = 0; i < firstArray.length; i++) {
        let firstArrayNumber = Number(firstArray[i]);
        let secondArrayNumber = Number(secondArray[i]);

        if (firstArrayNumber != secondArrayNumber) {
             index = i;
             console.log(`Arrays are not identical. Found difference at ${index} index`);

             return;
        } 
    }
    let sum = 0;

    firstArray.forEach(number => sum += Number(number));

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['10','20','30'], ['10','20','30']);