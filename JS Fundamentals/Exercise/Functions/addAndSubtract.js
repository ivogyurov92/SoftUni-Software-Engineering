function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    subtract(add(firstNumber, secondNumber), thirdNumber);

    function add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function subtract(result, thirdNumber) {
        return console.log(result - thirdNumber);
    }
}

addAndSubtract(23, 6, 10);