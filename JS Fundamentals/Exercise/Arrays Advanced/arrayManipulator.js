function arrayManipulator(array, commands) {
    let newArray = [];

    for (let el of commands) {
        let [command, index, element] = el.split(' ');

        switch (command) {
            case 'add':
                array.splice(index, 0, +element);

                break;
            case 'addMany':
                let currentEl = 0;
                let removeFirst = el.split(' ');

                for (let i = removeFirst.length - 1; i >= 2; i--) {
                    currentEl = removeFirst[i];
                    array.splice(index, 0, +currentEl);
                }

                break;
            case 'contains':
                console.log(array.indexOf(+index));

                break;
            case 'remove':
                array.splice(index, 1);

                break;
            case 'shift':
                let position = +index;

                for (let i = 0; i < position; i++) {
                    let firstElement = array.shift();
                    array.push(firstElement);
                }

                break;
            case 'sumPairs':
                let els = array.reduce(function (total, el, index) {
                    if (index % 2 === 0) {
                        total.push(+array[index] + (+array[index + 1] || 0));
                    }

                    return total;
                }, []);

                array = els;

                break;
            case 'print':
                for (let el of array) {
                    newArray.push(el);
                }

                break;
        }
    }

    console.log('[ ' + newArray.join(', ') + ' ]');
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);