function printDNA(count) {
    let array = 'ATCGTTAGGG'.split('');

    for (let i = 1; i <= count; i++) {
        let [a, b] = array.splice(0, 2)

        if (i === 1 || i % 4 === 1) {
            console.log(`**${a}${b}**`);
        } else if (i === 2 || i % 4 === 2) {
            console.log(`*${a}--${b}*`);
        } else if (i === 3 || i % 4 === 3) {
            console.log(`${a}----${b}`);
        } else if (i === 4 || i % 4 === 0) {
            console.log(`*${a}--${b}*`);
        }

        array.push(a)
        array.push(b)
    }
}

printDNA(4);