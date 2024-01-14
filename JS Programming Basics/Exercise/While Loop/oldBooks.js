function oldBooks(input) {
    let searchedBook = input[0];
    let booksCount = 0;
    let index = 1;
    let command = input[index];

    while (command !== 'No More Books') {
        if (command === searchedBook) {
            console.log(`You checked ${booksCount} books and found it.`);
            break;
        }

        booksCount++;
        index++;
        command = input[index];
    }

    if (command === 'No More Books') {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCount} books.`);
    }
}

oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);