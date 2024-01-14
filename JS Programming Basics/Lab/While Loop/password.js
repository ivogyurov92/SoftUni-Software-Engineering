function password(input) {
    let username = input[0];
    let password = input[1];

    let index = 2;
    let word = input[index];

    while (word !== password) {
        index++;
        word = input[index];
    }

    if (word === password) {
        console.log(`Welcome ${username}!`);
    }
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);