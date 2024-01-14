function sumOfNumbers(input) {
    let number = Number(input[0]);

    let index = 1;
    let currentNumber = Number(input[index]);

    let sum = 0;

    while (sum < number) {
        sum += Number(currentNumber);

        index++;
        currentNumber = Number(input[index]);
    }

    console.log(sum);
}

sumOfNumbers(["100", "10", "20", "30", "40"]);