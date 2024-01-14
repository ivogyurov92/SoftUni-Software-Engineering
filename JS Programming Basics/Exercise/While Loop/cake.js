function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let cakesCount = width * length;

    let index = 2;
    let command = input[index];

    while (command !== 'STOP') {
        command = Number(input[index]);
        cakesCount -= command;

        if (cakesCount <= 0) {
           console.log(`No more cake left! You need ${Math.abs(cakesCount)} pieces more.`);

           break;
        }

        index++;
        command = input[index];
    }

    if (command === 'STOP') {
        console.log(`${cakesCount} pieces are left.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);