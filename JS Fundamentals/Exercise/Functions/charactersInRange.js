function charactersInRange(firstCharacter, secondCharacter) {
    let start = firstCharacter.charCodeAt();
    let end = secondCharacter.charCodeAt();

    if (start > end) {
       let currentStart = start;
       start = end;
       end = currentStart;
    }
    
    let array = [];

    printChars(start, end);

    function printChars(start, end) {        
        for (let i = start + 1; i < end; i++) {
            array.push(String.fromCharCode(i));           
        }

        console.log(array.join(' '));
    }
}

charactersInRange('C', '#');