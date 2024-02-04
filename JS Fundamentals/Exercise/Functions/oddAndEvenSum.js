function oddAndEvenSum(number) {
    calculateSum(number.toString());

    function calculateSum(numberAsString) {  
        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < numberAsString.length; i++) {
            let number = Number(numberAsString[i]);

            if (number % 2 == 0) {
                evenSum += number;
            } else {
                oddSum += number;
            }
        }

        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
}

oddAndEvenSum(1000435);