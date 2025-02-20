function revealWords(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].includes('*')) {
            let length = textArr[i].length;
            let currentWord = wordsArr.filter(x => x.length == length)[0];

            text = text.replace(textArr[i], currentWord)
        }       
    }

    console.log(text);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');