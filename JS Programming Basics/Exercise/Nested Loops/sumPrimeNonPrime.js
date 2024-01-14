function sumOfNumbers(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    let index = 0;
    let command = input[index];

    while (command !== 'stop') {
        let number = Number(command);
        let counter = 0;

        if (number < 0) {
            console.log('Number is negative.');
            index++;
            command = input[index];
            
            continue;
        }

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                nonPrimeSum += number;
                counter++;
                break;
            }
        }

        if(counter === 0) {
            primeSum += number;
        }

        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumOfNumbers(["3", "9", "0", "7", "19", "4", "stop"]);