function loadingBar(number) {
    let count = number / 10;
    let loading = '[';

    loading = getCurrentProgress(loading, count);
    loading = getProgressLeft(loading, count);
    printResult(loading, number);

    function getCurrentProgress(loading, count) {
        for (let i = 0; i < count; i++) {
            loading += '%';
        } 

        return loading;
    }

    function getProgressLeft(loading, count) {
        for (let i = count; i <= 10; i++) {
            if (i == 10) {
                loading += ']'
            } else {
                loading += '.';
            }
        }

        return loading;
    }

    function printResult(loading, number) {
        if (number == 100) {
            console.log(`${number}% Complete!`);
            console.log(loading);
        } else {
            console.log(`${number}% ${loading}`);
            console.log(`Still loading...`);
        }
    }
}

loadingBar(50);