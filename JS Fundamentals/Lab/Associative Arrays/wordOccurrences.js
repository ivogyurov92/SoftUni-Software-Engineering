function wordOccurrences(array) {
    let words = {};

    for (let word of array) {
        if (word in words) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }

    let entries = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of entries) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);