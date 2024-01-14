function login(input) {
    let username = input[0];
    let counter = 0;

    for (let i = 1; i < input.length; i++) {
        let currentPassword = input[i].split('').reverse().join('');

        if (currentPassword === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            counter++;

            if (counter === 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);