import React from 'react';

// Planning the Movie Component
/*
  이론적으로 할 일은 componentDidMount에서 data를 fetch
  fetch가 완료되면 표시!
*/

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  componentDidMount() {
    setTimeout(()=> { this.setState({isLoading: false})}, 6000);
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
