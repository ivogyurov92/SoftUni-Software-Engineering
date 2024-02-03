function commonElements(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        let word = firstArray[i];

        if (secondArray.includes(word)) {
            console.log(word);
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);