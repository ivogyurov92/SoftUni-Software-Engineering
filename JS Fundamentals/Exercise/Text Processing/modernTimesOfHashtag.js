function modernTimesOfHashtag(text) {
    let wordsArr = text.split(' ');

    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].includes('#') && wordsArr[i].length > 1) {
            let isValid = true;

            for (let a = 0; a < wordsArr[i].length; a++) {
                if (wordsArr[i][a] <= 9 || wordsArr[i][a] >= 0) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                console.log(wordsArr[i].substring(1, wordsArr[i].length));
            }
        }
    }
}

modernTimesOfHashtag('The symbol # is known #variously in English-speaking #regions as the #number sign');