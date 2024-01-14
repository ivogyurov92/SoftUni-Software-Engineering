function sumOfNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let result = 0;

    for (let number = start; number <= end; number++) {
        if (number % 9 === 0) {
            result += number;
        }
    }

    console.log(`The sum: ${result}`);

    for (let number = start; number <= end; number++) {
        if (number % 9 === 0) {
            console.log(number);
        }       
    }
}

sumOfNumbers(["100", "200"]);