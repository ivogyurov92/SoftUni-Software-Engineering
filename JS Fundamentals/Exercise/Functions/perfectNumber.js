function perfectNumber(number) {
    let sum = calculateSum(number);

    if (number == sum) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

    function calculateSum(number) {
        let sum = 0;

        for (let i = 1; i <= number / 2; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }

        return sum;
    }
}

perfectNumber(8);