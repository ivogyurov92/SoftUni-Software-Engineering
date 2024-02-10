function smallestTwoNumbers(array) {
    array.sort((a, b) => {
        return a - b;
    })
    
    console.log(array.slice(0, 2).join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);