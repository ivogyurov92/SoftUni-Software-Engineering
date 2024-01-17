function amazingNumber(number) {
    let numberAsString = number.toString();
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let num = Number(numberAsString[i]);
        sum += num;
    }

    if (sum.toString().includes('9')) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}

amazingNumber(1233);