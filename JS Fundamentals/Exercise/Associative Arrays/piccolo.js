function piccolo(array) {
    let parking = new Map();

    for (let element of array) {
        let [direction, carNumber] = element.split(', ');

        switch (direction) {
            case 'IN':
                parking.set(carNumber)
                break;
            case 'OUT':
                parking.delete(carNumber)
                break;
        }
    }

    let entries = [...parking].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [carNumber] of entries) {
        console.log(`${carNumber}`);
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);