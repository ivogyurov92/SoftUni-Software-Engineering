function sumOfDigits(number) {
    let numberAsString = number.toString();
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);       
    }

    console.log(sum);
}

sumOfDigits(245678);