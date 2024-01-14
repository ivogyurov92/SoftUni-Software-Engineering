function numberPyramid(input) {
    let end = Number(input[0]);
    let counter = 0;

    let output = '';

    for (let i = 1; i <= end; i++) {
        for (let j = 1; j <= i; j++) {
            counter++;
            output += `${counter} `

            if (counter === end) {
                break;
            }
        }

        console.log(output);
        output = '';

        if (counter === end) {
            break;
        }
    }
}

numberPyramid(["15"]);