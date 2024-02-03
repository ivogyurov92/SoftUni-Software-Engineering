function addAndSubtract(array) {
    let modifiedArray = [];
    let oldArraySum = 0;
    let newArraySum = 0;

    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        if (number % 2 === 0) {
            number += i;
        } else {
            number -= i;
        }

        modifiedArray.push(number);
    }

    array.forEach(num => oldArraySum += num);
    modifiedArray.forEach(num => newArraySum += num);

    console.log(modifiedArray);
    console.log(oldArraySum);
    console.log(newArraySum);
}

addAndSubtract([5, 15, 23, 56, 35]);