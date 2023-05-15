let genre = document.getElementById("genres");
let listmovie = document.getElementById("listmovies");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWNjODBkZTY1N2E0MGIyMDlkOWUyYmZjMDVlMjA5MiIsInN1YiI6IjY0NjFjMDk0YTY3MjU0MDE4NTg4NmU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._hewmZr4Fh_qyhQd6ny5hmpqfmuQjEadSn3gHj6ipSg",
  },
};
fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.genres.forEach(showGenre);
  });

//Pengambilan API Genre
fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.genres.forEach(showGenre);
  });

function showGenre(val, idx) {
  genre.innerHTML += ` <div class="d-grid gap-2 col-6 mx-auto mt-4">
                        <button onclick="getGenre(${val.id})" class="btn btn-primary" type="button">${val.name}</button>
                        </div>`;
}

function getGenre(id) {
  //Pengambilan API List Movie
  console.log(id);
  fetch(
    "https://api.themoviedb.org/3/discover/movie?with_genres=" +
      JSON.stringify(id),
    options
  )
    .then((response) => response.json())
    .then((data) => {
      listmovie.innerHTML = "";
      console.log(data);
      data.results.forEach(showListMovie);
    });
}

function showListMovie(val, idx) {
  listmovie.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="https://image.tmdb.org/t/p/original/${val.poster_path}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${val.original_title}</h5>
      <p class="card-text">${val.overview}</p>
    </div>
  </div>`;
}
