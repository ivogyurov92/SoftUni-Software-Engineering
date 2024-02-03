function reverseArrayOfNumbers(count, numbers) {
    let reversedArray = numbers.splice(0, count).reverse();

    console.log(reversedArray.join(' '));
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);