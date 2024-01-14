function operationsBetweenNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let isEvenNumber = false;

    if (secondNumber === 0) {
        console.log(`Cannot divide ${firstNumber} by zero`);

        return;
    }

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;       

            if (result % 2 === 0) {
                isEvenNumber = true;
            }

            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${isEvenNumber ? 'even': 'odd'}`);
            
            break;
        case '-':
            result = firstNumber - secondNumber;

            if (result % 2 === 0) {
                isEvenNumber = true;
            }

            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${isEvenNumber ? 'even': 'odd'}`);
            
            break;
        case '*':
            result = firstNumber * secondNumber;

            if (result % 2 === 0) {
                isEvenNumber = true;
            }

            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${isEvenNumber ? 'even': 'odd'}`);
            
            break;
        case '/':
            result = firstNumber / secondNumber;
            console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);

            break;
        case '%':
            result = firstNumber % secondNumber;
            console.log(`${firstNumber} % ${secondNumber} = ${result}`);

            break;
    }
}

operationsBetweenNumbers(["25", "5", "/"]);