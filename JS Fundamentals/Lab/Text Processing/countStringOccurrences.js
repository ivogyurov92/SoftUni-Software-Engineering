function countStringOccurrences(text, word) {
    let textArr = text.split(' ');
    let count = 0;

    for (let i = 0; i < textArr.length; i++) {
        if (word == textArr[i]) {
            count++;
        }       
    }

    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');