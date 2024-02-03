function addAndRemove(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'remove') {
            result.pop();
        } else if (array[i] === 'add') {
            result.push(i + 1);
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);