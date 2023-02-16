const tmdbKey = 'e635123f470cacfb7a7327b7644aeadf';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}&language=en-US`;
    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
    try{
        let response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            let genres = jsonResponse.genres;
            return genres;
        }
    }catch(error){
        console.log(error)
    }
};

const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const discoverMovieEndpoint = '/discover/movie';
    const requestParams = `?api_key=${tmdbKey}${selectedGenre}`;
    const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams
    try{
        let response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = response.json();
            const movies = jsonResponse.results;
            return movies;
        }
    }catch(error){
        console.log(error)
    }
};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
    const movieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;