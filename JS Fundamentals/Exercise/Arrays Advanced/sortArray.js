function sortArray(array) {
    array.sort();
    array.sort((a, b) => {
        return a.length - b.length;
    })

    console.log(array.join('\n'));
}

sortArray(['alpha', 'beta', 'gamma']);