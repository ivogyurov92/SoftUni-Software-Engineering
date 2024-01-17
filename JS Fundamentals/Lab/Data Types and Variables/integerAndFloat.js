function integerOrFloat(firstNumber, secondNumber, thirdNumber) {
    let sum = firstNumber + secondNumber + thirdNumber;
    let typeOfNumber = 'Float';

    if (sum % 1 === 0) {
        typeOfNumber = 'Integer';
    }

    console.log(`${sum} - ${typeOfNumber}`);
}

integerOrFloat(9, 100, 1.1);