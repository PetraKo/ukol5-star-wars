export default class Movie {

    constructor(episode, title, releaseYear, director) {
        this.episode = episode;
        this.title = title;
        this.releaseYear = releaseYear;
        this.director = director;
    }

    renderHTML() {

        let filmElement = document.createElement('div');
        filmElement.classList.add("film");

        let episodeElement = document.createElement("div");
        episodeElement.classList.add("film_episode");
        episodeElement.innerHTML = this.episode;

        let filmDataElement = document.createElement("div");
        filmDataElement.classList.add("film_data");

        filmElement.appendChild(episodeElement);
        filmElement.appendChild(filmDataElement);

        let filmNameElement = document.createElement("div");
        filmNameElement.classList.add("film_name");
        filmNameElement.innerHTML =  this.title;

        let filmYearElement = document.createElement("div");
        filmYearElement.classList.add("film_year");
        filmYearElement.innerHTML = this.releaseYear;

        let filmDirectorElement = document.createElement("div");
        filmDirectorElement.classList.add("film_director");
        filmDirectorElement.innerHTML = this.director;

        filmDataElement.appendChild(filmNameElement);
        filmDataElement.appendChild(filmYearElement);
        filmDataElement.appendChild(filmDirectorElement);

        const movies = document.getElementById("films");
        movies.appendChild(filmElement);
    }
}