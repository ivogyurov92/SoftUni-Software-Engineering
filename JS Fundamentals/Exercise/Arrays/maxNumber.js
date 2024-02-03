function maxNumber(array) {
    let topElements = [];
    let isTopElement = true;

    for (let i = 0; i < array.length; i++) {
        let number = Number(array[i]);

        for (let j = i + 1; j < array.length; j++) {
            let nextNumber = Number(array[j]);

            if (number <= nextNumber) {
                isTopElement = false;

                break;
            }
        }

        if (isTopElement) {
            topElements.push(number);
        }

        isTopElement = true;
    }

    console.log(topElements.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17]);