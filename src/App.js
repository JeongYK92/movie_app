import React from 'react';
import axios from 'axios';
import Movie from './Movie';

// Rendering the Movies
/*

*/

class App extends React.Component {
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
      <div>
        { isLoading ?
            "Loading..." :
            movies.map(movie => {
              // console.log(movie);
              return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
            })
        }
      </div>
    );
  }
}

export default App;
