function figuresArea(input) {
    let figure = input[0];
    let a = Number(input[1]);
    let area = 0;

    if (figure === 'square') {
        area = Math.pow(a, 2);
    } else if (figure === 'rectangle') {
        let b = Number(input[2]);
        area = a * b;
    } else if (figure === 'circle') {
        area = Math.PI * Math.pow(a, 2);
    } else if (figure === 'triangle') {
        let b = Number(input[2]);
        area = a * b / 2;
    } 

    console.log(area.toFixed(3));
}

figuresArea(["rectangle", "7", "2.5"]);