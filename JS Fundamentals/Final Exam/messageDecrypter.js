function messageDecrypter(input) {
    let count = Number(input.shift());
    let pattern = /^([$|%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<firstNumber>[0-9]+)\]\|\[(?<secondNumber>[0-9]+)\]\|\[(?<thirdNumber>[0-9]+)\]\|$/;
   
    for (let i = 0; i < count; i++) {
        let exec = pattern.exec(input[i]);

        if (exec) {
            let firstLetter = String.fromCharCode(exec.groups.firstNumber);
            let secondLetter = String.fromCharCode(exec.groups.secondNumber);
            let thirdLetter = String.fromCharCode(exec.groups.thirdNumber);
            let message = firstLetter + secondLetter + thirdLetter;

            console.log(`${exec.groups.tag}: ${message}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}

messageDecrypter(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"]);