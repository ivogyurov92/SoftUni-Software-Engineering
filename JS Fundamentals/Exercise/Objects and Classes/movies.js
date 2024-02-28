function movies(input) {
    let movies = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');

        if (command.includes('addMovie')) {        
            let movieName = input[i].split('addMovie ')[1];   
            let movieObj = {
                name: movieName
            }        

            movies.push(movieObj);
        } else if (command.includes('directedBy')) {
            let movieName = input[i].split(' directedBy ')[0];
            let directedBy = input[i].split(' directedBy ')[1];
            let foundMovie = movies.find(m => m.name == movieName);

            if (foundMovie) {
                foundMovie.director = directedBy;
            }
        } else if (command.includes('onDate')) {
            let movieName = input[i].split(' onDate ')[0];
            let date = input[i].split(' onDate ')[1];
            let foundMovie = movies.find(m => m.name == movieName);

            if (foundMovie) {
                foundMovie.date = date;
            }
        }
    }

    movies.filter(m => m.name && m.director && m.date).forEach(m => console.log(JSON.stringify(m)));
}

movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford',
    'Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);