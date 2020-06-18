import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// label tag 속성에는 for가 있다. 이는 js와 혼동되기 때문에 htmlFor로 수정해야한다.

function Movie({ year, title, summary, poster, genres }) {
  return <div className="movie">
    <img src={poster} alt={title} title={title} />
    <div className="movie__data">
      {/* <h3 class="movie__title" style={{backgroundColor: "red"}}>{title}</h3> */}
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <ul className="movie__genres">
        {genres.map((genre, index) => (
          <li key={index} className="genres__genre">{genre}</li>
        ))}
      </ul>
      <p className="movie__summary">{summary.slice(0, 140)}...</p>
    </div>
  </div>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;