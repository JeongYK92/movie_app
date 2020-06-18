import React from "react";
import PropTypes from "prop-types";

// 꼭 class component가 될 필요는 없다.

function Movie({id, year, title, summary, poster}) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie;