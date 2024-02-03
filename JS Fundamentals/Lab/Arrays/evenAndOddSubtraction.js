function evenOddSubtraction(array) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    console.log(evenSum - oddSum);
}

evenOddSubtraction([1, 2, 3, 4, 5, 6]);