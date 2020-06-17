import React from 'react';
import PropTypes from 'prop-types';

// Class Components and State

/*
react는 자동으로 class component의 render method를 실행
state는 obj.
*/

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
  };
  
  minus = () => {
    console.log("minus");
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
