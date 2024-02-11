function findNumber(array, input) {
    let [count, removeCount, number] = input;
    let newArray = array.slice(0, count);
    newArray.splice(0, removeCount);
    let counter = 0;

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] == number) {
            counter++;
        }
    }

    console.log(`Number ${number} occurs ${counter} times.`);
}

findNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);