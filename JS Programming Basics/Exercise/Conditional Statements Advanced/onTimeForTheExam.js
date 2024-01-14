function isOnTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    let examHourInMinutes = examHour * 60;
    let examHourTotalMinutes = examHourInMinutes + examMinute;
    let arrivalHourInMinutes = arrivalHour * 60;
    let arrivalHourTotalMinutes = arrivalHourInMinutes + arrivalMinute;
    let differenceInMinutes = examHourTotalMinutes - arrivalHourTotalMinutes;

    if (differenceInMinutes <= 30 && differenceInMinutes >= 0) {
        console.log('On time');
    } else if (differenceInMinutes > 30) {
        console.log('Early');
    } else {
        console.log('Late');
    }

    if (differenceInMinutes < 60 && differenceInMinutes > 0) {
        console.log(`${differenceInMinutes} minutes before the start`);
    } else if (differenceInMinutes >= 60) {
        let hours = Math.floor(differenceInMinutes / 60);
        let minutes = differenceInMinutes % 60;

        if(minutes < 10) {
            minutes = '0' + minutes;
        }

        console.log(`${hours}:${minutes} hours before the start`);
    } else if (differenceInMinutes < 0 && differenceInMinutes > -60) {
        console.log(`${Math.abs(differenceInMinutes)} minutes after the start`);
    } else if (differenceInMinutes <= -60) {
        differenceInMinutes = Math.abs(differenceInMinutes);
        let hours = Math.floor(differenceInMinutes / 60);
        let minutes = differenceInMinutes % 60;

        if(minutes < 10) {
            minutes = '0' + minutes;
        }

        console.log(`${hours}:${minutes} hours after the start`);
    }
}

isOnTimeForExam(["10", "00", "10", "00"]);