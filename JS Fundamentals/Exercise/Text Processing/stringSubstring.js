function stringSubstring(word, text) {
    let arr = text.split(' ');
    let wordFound = false;

    for (let i = 0; i < arr.length; i++) {
        if (word.toLowerCase() == arr[i].toLowerCase()) {
            console.log(word);
            wordFound = true;
        }       
    }

    if (!wordFound) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python', 'JavaScript is the best programming language');