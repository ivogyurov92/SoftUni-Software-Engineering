function passwordGenerator(arr) {
    let firstWord = arr.shift();
    let secondWord = arr.shift();
    let thirdWord = arr.shift().toUpperCase();
    let word = firstWord + secondWord;
    let vowels = ['a', 'e', 'o', 'u', 'i'];
    let idx = 0;

    for (let letter of word) {
        if (vowels.includes(letter)) {
            word = word.replace(letter, thirdWord[idx].toUpperCase())
            idx++;
        }

        if (idx == thirdWord.length) {
            idx = 0;
        }
    }

    console.log(`Your generated password is ${word.split('').reverse().join('')}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])