function oddOccurrences(input) {
    let words = new Map();
    let array = input.split(' ');

    for (let word of array) {
        word = word.toLowerCase();

        if (words.has(word)) {
            words.set(word, words.get(word) + 1);
        } else {
            words.set(word, 1);
        }
    }

    let wordsAsString = '';

    for (let [word, count] of [...words]) {
        if(count % 2 == 1) {
          wordsAsString += `${word} `;
        }
    }

    console.log(wordsAsString);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');