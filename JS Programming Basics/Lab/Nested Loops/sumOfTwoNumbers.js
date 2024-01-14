function sumOfNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let sum = 0;
    let count = 0;
    let firstNumber = 0;
    let secondNumber = 0;
    let magicNumberFound = false;

    if (start > end) {
        start = Number(input[1]);
        end = Number(input[0]); 
    } 

    for (let a = start; a <= end; a++) {
        if (magicNumberFound) {
            break;
        }

        for (let b = start; b <= end; b++) {
            sum = a + b;
            count++;

            if (sum === magicNumber) {
                firstNumber = a;
                secondNumber = b;
                magicNumberFound = true;

                break;
            }
        }
    }

    if (magicNumberFound) {
        console.log(`Combination N:${count} (${firstNumber} + ${secondNumber} = ${magicNumber})`);
    } else {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
}

sumOfNumbers(["1", "10", "5"]);