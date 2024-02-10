function lastNumbersSequence(n, k) {
    let sum = 0;
    let array = [1];

    for (let i = 1; i < n; i++) {
        let newArray = array.slice(array.length >= k ? array.length - k : 0);

        newArray.map(x => sum += x);
        array.push(sum);
        sum = 0;
    }

    console.log(array.join(' '));
}

lastNumbersSequence(6, 3);