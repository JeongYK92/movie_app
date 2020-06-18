import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

// Routing!
// react-router-dom
/*
  npm install react-router-dom --save
  react에서 navigation bar를 만들어줌
*/

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  // async + await. 비동기 호출
  getMovies = async () => {
    // axios가 끝날 때 까지 await. 기다려라.
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?srot_by=rating'); // rating 별 정렬.API 문서가면 있다.
    // console.log(movies);
    // console.log(movies.data.data.movies); // movies list
    this.setState({ movies, isLoading: false }); // this.setState({ movies: movies });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
