function hogwarts(input) {
    let decipheredSpell = input.shift();
    let newWord = decipheredSpell.slice();

    let command = input.shift();

    while (command != 'Abracadabra') {
        let token = command.split(' ');
        let spell = token[0];

        switch (spell) {
            case 'Abjuration':
                newWord = newWord.toUpperCase();
                console.log(newWord);
                break;
            case 'Necromancy':
                newWord = newWord.toLowerCase();
                console.log(newWord);
                break;
            case 'Illusion':
                let index = Number(token[1]);
                let letter = token[2];

                if (index < 0 || index > newWord.length - 1) {
                    console.log('The spell was too weak.');
                } else {
                    newWord = newWord.substring(0, index) + letter + newWord.substring(index + letter.length);
                    console.log('Done!');
                }

                break;
            case 'Divination':
                let firstString = token[1];
                let secondString = token[2];

                while (newWord.includes(firstString)) {
                    newWord = newWord.replace(firstString, secondString);
                }

                console.log(newWord);

                break;
            case 'Alteration':
                let subString = token[1];

                while (newWord.includes(subString)) {
                    newWord = newWord.replace(subString, '');
                }
                
                console.log(newWord);
                break;
            default:
                console.log('The spell did not work!');
                break;
        }

        command = input.shift();
    }
}

hogwarts([
    "SwordMaster",
    "Alteration Mast",
    "Abracadabra"
])