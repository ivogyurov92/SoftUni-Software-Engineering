function signCheck(firstNumber, secondNumber, thirdNumber) {
    let resultOfFirstTwo = multiplyTwoNumbers(firstNumber, secondNumber);
    
    let finalResult = resultOfFirstTwo * thirdNumber;

    finalResult < 0 ? console.log('Negative') : console.log('Positive');
    
    function multiplyTwoNumbers(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
}

signCheck(5, 12, -15);