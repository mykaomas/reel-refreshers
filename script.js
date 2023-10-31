//apiKey = d999ebd26747e0c3f46ea86ac84f73f3
const genreSelect = document.getElementById('genre');
const posterImage = document.getElementById('moviePoster');

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function fetchMovieData(genre) {
  const pageNumber = getRandomNumber(20);
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&page=${pageNumber}&language=en-US&api_key=d999ebd26747e0c3f46ea86ac84f73f3`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const chosenMovie = data.results[2];
      const moviePosterEl = document.getElementById('moviePoster')
      const posterSrc = 'https://image.tmdb.org/t/p/w185'
      moviePosterEl.src = posterSrc + chosenMovie.poster_path
      console.log(chosenMovie.title);
      console.log(chosenMovie.poster_path);
      console.log(chosenMovie);

      const chosenMovieEl = document.getElementById('chosenMovie');
      chosenMovieEl.textContent = `Movie: ${chosenMovie.title}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function fetchRandomDrink() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var drinkImg = data.drinks[0].strDrinkThumb
      console.log(drinkImg)
      const chosenDrink = data.drinks[0].strDrink;
      const drinkPhotoEl = document.getElementById('drinkPhoto')
      drinkPhotoEl.src = drinkImg
      const chosenDrinkEl = document.getElementById("chosenDrink");
      chosenDrinkEl.textContent = `Drink: ${chosenDrink} - ${data.drinks[0].strInstructions}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function getSuggestion() {
  const selectedGenre = genreSelect.value;

  fetchMovieData(selectedGenre)
    .then(() => fetchRandomDrink())
    .catch(error => {
      console.error('Error:', error);
    });
}