function echoType(word) {
    let type = typeof word;

    if (type === 'string' || type === 'number') {
        console.log(type);
        console.log(word);
    } else {
        console.log('object');
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');