import React from 'react';
import PropTypes from 'prop-types';

// All you need to know about State

/*
  this.state.count = 1; // Do not mutate state directly. 직접적으로 state를 수정하지 말아라.
  setState()를 사용, 호출할 때마다 state의 변경, render function이 호출된다.
*/

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    // console.log("add");
    this.setState(current => ({count: current.count + 1})); // 이 방식 추천
  };
  
  minus = () => {
    // console.log("minus");
    this.setState({count: this.state.count - 1});
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
