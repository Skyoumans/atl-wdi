import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = (props) => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>{props.movie.Title}</h3>
        <p>
          <strong>Released:</strong>{props.movie.Year}<br />
          <strong>Directed By:</strong>{props.movie.Director}<br />
          <strong>Genre:</strong>{props.movie.Genre}<br />
        </p>
        <p>{props.movie.Plot}</p>
      </div>

      <img src ={props.movie.Poster} alt={props.movie.Title} />
    </section>
  );
};

export default Movie;


