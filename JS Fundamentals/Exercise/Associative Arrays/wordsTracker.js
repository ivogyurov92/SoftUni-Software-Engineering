function wordsTracker(array) {
    let words = {};
    let searchedWords = array.shift().split(' ');

    for (let word of searchedWords) {
        words[word] = 0;
    }

    for (let word of array) {
        if (word in words) {
            words[word]++;
        }
    }

    let entries = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of entries) {
        console.log(`${word} - ${count}`);
    }
}

wordsTracker(['this sentence',
'In', 'this', 'sentence', 'Sentence', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task']);