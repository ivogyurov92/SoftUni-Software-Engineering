function magicSum(array, number) {
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let nextNumber = array[j];   
            let sum = currentNumber + nextNumber;

            if (sum == number) {
                console.log(`${currentNumber} ${nextNumber}`);
            } 
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);