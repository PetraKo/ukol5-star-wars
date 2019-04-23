console.log('Star Wars! Pew pew..');

import Movie from "./movie";

const apiUrl = "https://swapi.co/api/films/";

fetch(`${apiUrl}`)
    .then(response => response.json())
    .then(responseJson => displayStarWarsFilms(responseJson))
    //  .catch(error => {
    //  console.error(`Došlo k chybě: ${error.message} ${error.stack}`);
    //  })
;

function displayStarWarsFilms(data) {

    data.results.map(movieFromApi => {

        let title = movieFromApi.title;
        let episode = movieFromApi.episode_id.sort((a,b) => a - b);
        let releaseDate = movieFromApi.release_date.slice(0,4);
        let director = movieFromApi.director;
    
        const movie = new Movie(episode, title, releaseDate, director);
        movie.renderHTML();
    });

}

function ascendingSort(data) {
  data.episode.sort((a,b) => a - b);
    // console.log(movie);  
}
