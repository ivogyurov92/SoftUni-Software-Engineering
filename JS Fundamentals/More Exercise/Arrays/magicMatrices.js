function magicMatrices(matrix) {
    let rows = matrix[0].reduce((a, b) => a + b);
    let cols = 0;

    matrix.forEach(row => {
        cols += row[0];
    });

    let result = true;

    for (let i = 0; i < matrix.length; i++) {
        const currentRow = matrix[i].reduce((acc, item) => acc + item);
        let currentCol = 0;

        for (let j = 0; j < matrix.length; j++) {
            const num = matrix[j][i];
            currentCol += num;
        }

        if (currentRow !== rows || currentCol !== cols) {
            result = false;

          	break;
        }
    }

    console.log(result);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);