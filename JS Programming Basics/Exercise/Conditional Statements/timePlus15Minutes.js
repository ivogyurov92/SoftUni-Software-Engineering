function timePlusFifteenMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let hoursInMinutes = hours * 60;
    let totalMinutes = hoursInMinutes + minutes + 15;

    let hour = Math.floor(totalMinutes / 60);
    let minute = totalMinutes % 60;

    if(hour == 24) {
        hour = 0;
    }

    if(minute < 10) {
        console.log(`${hour}:0${minute}`);
    } else {
        console.log(`${hour}:${minute}`);
    }
}

timePlusFifteenMinutes(["0", "01"]);