function simpleCalculator(firstNumber, secondNumber, operator) {
    let price = 0;

    let multiply = (a, b) => console.log(a * b);
    let divide = (a, b) => console.log(a / b);
    let add = (a, b) => console.log(a + b);
    let subtract = (a, b) => console.log(a - b);

    switch (operator) {
        case 'multiply':
            multiply(firstNumber, secondNumber);
            break;
        case 'divide':
            divide(firstNumber, secondNumber);
            break;
        case 'add':
            add(firstNumber, secondNumber);
            break;
        case 'subtract':
            subtract(firstNumber, secondNumber);
            break;
    }
}

simpleCalculator(5, 5, 'multiply');