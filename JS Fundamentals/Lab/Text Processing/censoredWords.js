function censoredWords(text, word) {
    let censored = text.replace(word, repeat(word));
    
    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word));
    }

    console.log(censored);

    function repeat(word) {
        let str = '';
        for (let i = 0; i < word.length; i++) {
            str += '*';
        }

        return str;
    }
}

censoredWords('A small sentence with some words', 'small');