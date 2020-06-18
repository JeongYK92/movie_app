import React from 'react';
import axios from 'axios';

// Fetching Movies from API
/*
  npm install axios
  fetch 대신 axios, fetch 위에 있는 작은 레이어 느낌?
  사용 API는 YTS, 그 중 list movies json. ( https://yts-poxy.now.sh/list_movies.json )
   - YTS는 매번 URL이 변경된다.. 따라서 노마드 코더가 만든 것 사용 ㅎㅎ
*/

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  // async + await. 비동기 호출
  getMovies = async () => {
    // axios가 끝날 때 까지 await. 기다려라.
    const movies = await axios.get('https://yts-poxy.now.sh/list_movies.json');
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return(
      <div>
        { isLoading ? "Loading...": "We are ready" }
      </div>
    );
  }
}

export default App;
