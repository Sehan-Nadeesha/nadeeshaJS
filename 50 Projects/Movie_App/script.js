const API_URL = ' https://api.themoviedb.org/3/discover/movie?page=1&include_adult=true&sort_by=popularity.desc&api_key=4fbf03dd05b49b9286bb31ad832695b2'

const IMG_path = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=4fbf03dd05b49b9286bb31ad832695b2&query="'

const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');

getMoveis(API_URL);

async function getMoveis(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach(movie => {
    const { title, poster_path, overview, vote_average, } = movie
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `<img
          src="${IMG_path + poster_path}"
          alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${setVoteClass(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>overview</h3>${overview}
        </div>`;
    main.appendChild(movieEl);
  });


}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMoveis(SEARCH_API + searchTerm);
    search.value = ''
  } else {
    window.location.reload();
  }

})



function setVoteClass(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
