function specialNumber(number) {
    for (let a = 1; a <= number; a++) {
        let numberAsString = a.toString();
        let sum = 0;

        for (let i = 0; i < numberAsString.length; i++) {
            sum += Number(numberAsString[i]);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${a} -> True`);
        } else {
            console.log(`${a} -> False`);
        }
    }
}

specialNumber(15);