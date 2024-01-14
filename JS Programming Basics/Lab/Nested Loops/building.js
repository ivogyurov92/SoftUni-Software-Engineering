function building(input) {
    let totalFloors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);
    let test = ``;

    for (let i = totalFloors; i >= 1; i--) {
        let currentFloor = i;

        for (let j = 0; j < roomsPerFloor; j++) {
            let currentRoom = j;

            if (currentFloor === totalFloors) {
                test += `L${currentFloor}${currentRoom} `;
            } else {
                if (currentFloor % 2 === 0) {
                    test += `O${currentFloor}${currentRoom} `;                    
                } else {
                    test += `A${currentFloor}${currentRoom} `;
                }
            }
        }

        console.log(test);
        test = ``;
    }
}

building(["6", "4"]);