function ladybugs(array) {
    let sizeOfField = array[0];
    let position = array[1].split(' ').map(Number);
    let ladybugsArray = [];

    for (let i = 0; i < sizeOfField; i++) {
        ladybugsArray.push(0);
    }

    for (let i = 0; i < sizeOfField; i++) {
        let index = position[i];

        if (index >= 0 && index < sizeOfField) {
            ladybugsArray[index] = 1;
        }
    }

    for (let i = 2; i < array.length; i++) {
        let [index, command, jumpLength] = array[i].split(' ');
        index = +index;
        jumpLength = +jumpLength;

        if (ladybugsArray[index] !== 1 || index < 0 || index >= ladybugsArray.length) {
            continue;
        }

        if (jumpLength < 0) {
            jumpLength = Math.abs(jumpLength);

            if (command === 'right') {
                command = 'left';
            } else if (command === 'left') {
                command = 'right';
            }
        }

        ladybugsArray[index] = 0;

        if (command === 'right') {
            let newPosition = index + jumpLength;

            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition + jumpLength;
            }

            if (newPosition <= ladybugsArray.length) {
                ladybugsArray[newPosition] = 1;
            }
        } else {
            let newPosition = index - jumpLength;

            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition - jumpLength;
            }

            if (newPosition >= 0) {
                ladybugsArray[newPosition] = 1;
            }
        }
    }

    console.log(ladybugsArray.join(' '));
}

ladybugs([5, '3', '3 left 2', '1 left -2']);