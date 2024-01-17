function compareWords(word, char, wordToMatch) {
    word = word.replace('_', char);

    word == wordToMatch ? console.log('Matched') : console.log('Not Matched');
}

compareWords('Str_ng', 'o', 'Strong');