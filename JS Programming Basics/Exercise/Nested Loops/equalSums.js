function equalSums(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let evenSum = 0;
    let oddSum = 0;
    let output = '';

    for (let i = start; i <= end; i++) {
        let numberAsString = i.toString();

        for (let j = 0; j < numberAsString.length; j++) {
            let number = Number(numberAsString[j]);

            if (j % 2 === 0) {
                evenSum += number;
            } else {
                oddSum += number;
            }
        }

        if (evenSum === oddSum) {
            output += `${i} `;
        }

        evenSum = 0;
        oddSum = 0;
    }

    console.log(output);
}

equalSums(["100000", "100050"]);