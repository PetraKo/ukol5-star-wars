console.log('Star Wars! Pew pew..');

import Movie from "./movie";

const apiUrl = "https://swapi.co/api/films/";

fetch(`${apiUrl}`)
    .then(response => response.json())
    .then(responseJson => displayStartWarsFilms(responseJson))
    //  .catch(error => {
    //  console.error(`Došlo k chybě: ${error.message} ${error.stack}`);
    //  })
;

function displayStartWarsFilms(data) {

    data.results.map(movieFromApi => {

        let title = movieFromApi.title;
        let episode = movieFromApi.episode_id;
        let releaseDate = movieFromApi.release_date.slice(0,4);
        let director = movieFromApi.director;
    
        const movie = new Movie(episode, title, releaseDate, director);

        movie.renderHTML();
    });

}
