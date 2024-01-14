function nextDay(year, month, day) {
    if(year < 1900) {
        year = 1901;
    }

    let date = new Date(`${year}-${month}-${day}`);
    date.setDate(date.getDate() + 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

nextDay(1, 1, 1);