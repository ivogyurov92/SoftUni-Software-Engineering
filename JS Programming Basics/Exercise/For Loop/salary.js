function salary(input) {
    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);

    for (let index = 2; index <= tabsCount + 2; index++) {
        let tab = input[index];

        if (salary <= 0) {
            console.log(`You have lost your salary.`); 
            return;
        } 

        switch (tab) {
            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50;
                break;
        }
    }

    console.log(salary);
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);