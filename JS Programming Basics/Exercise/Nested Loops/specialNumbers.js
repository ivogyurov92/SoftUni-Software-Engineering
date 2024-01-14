function specialNumbers(input) {
    let number = Number(input[0]);
    let output = '';
    let counter = 0;

    for (let i = 1111; i <= 9999; i++) {
        let numberAsString = i.toString();

        for (let j = 0; j < numberAsString.length; j++) {
            let currentNumber = Number(numberAsString[j]);

            if (number % currentNumber === 0) {
                counter++;
            }
        }

        if(counter === 4) {
            output += `${i} `
        }

        counter = 0;
    }

    console.log(output);
}

specialNumbers(["11"]);