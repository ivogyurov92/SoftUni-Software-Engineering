function palindromeInteger(array) {
    for (let number of array) {
        let reversedNumber = Number(number.toString().split('').reverse().join(''));

        if (number == reversedNumber) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeInteger([123, 323, 421, 121]);