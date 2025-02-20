function dictionary(input) {
    let arr = input.shift().split(' | ');
    let words = input.shift().split(' | ')
    let command = input.shift();
    let objectsArray = [];

    for (let i = 0; i < arr.length; i++) {
        let [word, definition] = arr[i].split(': ');
        let found = objectsArray.find(x => x.word == word);
        if (found) {
            found.definition.push(definition);
        } else {
            objectsArray.push({ word: word, definition: [definition] });
        }
    }

    if (command == 'Test') {
        for (let word of words) {
            let found = objectsArray.find(x => x.word == word);
            if (found) {
                console.log(`${found.word}:`);
                found.definition.forEach(x => console.log(` -${x}`));
            }            
        }
    } else if (command == 'Hand Over') {
        let words = objectsArray.map(x => x.word);
        console.log(words.join(' '));
    }
}

dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
"bit | code | tackle",
"Test"]);