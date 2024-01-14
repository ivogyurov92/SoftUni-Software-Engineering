function stepBy3(input) {
    let end = Number(input[0]);

    for (let index = 1; index <= end; index += 3) {
        console.log(index);      
    }
}

stepBy3(["100"]);