function numberSequence(input) {
    let number = Number(input[0]);

    let currentNumber = 1;
    let previousNumber = 0;

    while (currentNumber <= number) {
        console.log(currentNumber);
        previousNumber = currentNumber;      
        currentNumber = currentNumber * 2 + 1;
    }
}

numberSequence(["8"]);