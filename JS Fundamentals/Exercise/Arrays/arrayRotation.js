function arrayRotation(array, count) {
    for (let i = 1; i <= count; i++) {
        let element = array[0];

        array.shift();
        array.push(element);
    }

    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);