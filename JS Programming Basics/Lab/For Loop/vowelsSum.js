function vowelsSum(input) {
    let word = input[0];
    let result = 0;

    for (let index = 0; index < word.length; index++) {
        let character = word[index];

        switch (character) {
            case 'a':
            result += 1;
                break;
            case 'e':
                result += 2;
                break;
            case 'i':
                result += 3;
                break;
            case 'o':
                result += 4;
                break;
            case 'u':
                result += 5;
                break;
        }
    }

    console.log(result);
}

vowelsSum(["softuni"]);