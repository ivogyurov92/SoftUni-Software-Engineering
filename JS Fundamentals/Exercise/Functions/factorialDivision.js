function factorialDivision(firstNumber, secondNumber) {
    let firstSum = calculateFirstFactorial(firstNumber);
    let secondSum = calculateSecondFactorial(secondNumber);

    console.log((firstSum / secondSum).toFixed(2));

    function calculateFirstFactorial(firstNumber) {
        let result = 1;

        for (let i = 1; i <= firstNumber; i++) {
            result *= i;      
        }

        return result;
    }

    function calculateSecondFactorial(secondNumber) {
        let result = 1;

        for (let i = 1; i <= secondNumber; i++) {
            result *= i;      
        }

        return result;
    }
}

factorialDivision(6, 2);