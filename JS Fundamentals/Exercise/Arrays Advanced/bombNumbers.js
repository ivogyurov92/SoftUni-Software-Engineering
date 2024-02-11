function bombNumbers(array, input) {
    let [specialNumber, power] = input;

    while (array.includes(specialNumber)) {
        let bombIndex = array.indexOf(specialNumber);
        let leftIndex = bombIndex - power < 0 ? 0 : bombIndex - power;
        let rightIndex = bombIndex + power > array.length - 1 ? array.length - 1 : bombIndex + power;

        array.splice(leftIndex, rightIndex - leftIndex + 1);
    }

    let sum = 0;
    array.map(x => sum += x);

    console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);