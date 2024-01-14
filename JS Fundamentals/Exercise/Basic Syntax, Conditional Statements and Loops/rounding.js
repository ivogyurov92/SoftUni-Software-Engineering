function roundNumber(number, precision) {
    if (precision > 15) {
        console.log(parseFloat(number.toFixed(15)));
    } else {
        console.log(parseFloat(number.toFixed(precision)));
    }
}

roundNumber(20.500000, 2);