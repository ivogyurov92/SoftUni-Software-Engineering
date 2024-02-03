function equalSums(array) {
    if (array.length < 2) {
        console.log(0);

        return;
    }

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i + 1; j < array.length; j++) {
            let rightNumber = Number(array[j]);
            rightSum += rightNumber;
        }

        for (let k = i - 1; k >= 0; k--) {
            let leftNumber = Number(array[k]);
            leftSum += leftNumber;
        }

        if (rightSum == leftSum) {
            console.log(i);

            return;
        }
    }

    console.log('no');
}

equalSums([1, 2, 3, 3]);