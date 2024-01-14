function clock() {
    let hours = 23;
    let minutes = 59;

    for (let i = 0; i <= hours; i++) {
        let hour = i;

        for (let j = 0; j <= minutes; j++) {
            let minute = j;

            console.log(`${hour}:${minute}`);
        }
    }
}

clock();