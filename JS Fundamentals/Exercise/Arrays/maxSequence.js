function maxSequence(array) {
    let maxSequenceArray = [];

    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        let currentArray = [];
        currentArray.push(number);

        for (let j = i + 1; j < array.length; j++) {
            let nextNumber = array[j];   
            
            if (number == nextNumber) {
                currentArray.push(number);
            } else {
                break;
            }
        }

        if (maxSequenceArray.length < currentArray.length) {
            maxSequenceArray = currentArray;
        }
    }

    console.log(maxSequenceArray.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);