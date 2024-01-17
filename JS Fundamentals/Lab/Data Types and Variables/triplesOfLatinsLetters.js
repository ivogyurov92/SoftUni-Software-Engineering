function triplesOfLatinLetters(numberAsString) {
    let number = Number(numberAsString);

    for (let a = 97; a < 97 + number; a++) {

        for (let b = 97; b < 97 + number; b++) {

            for (let c = 97; c < 97 + number; c++) {
                console.log(`${String.fromCharCode(a)}${String.fromCharCode(b)}${String.fromCharCode(c)}`);
            }
        }

    }
}

triplesOfLatinLetters('2');