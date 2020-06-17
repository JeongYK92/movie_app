import React from 'react';

// Component Life Cycle
// https://reactjs.org/docs/react-component.html
/*
  react는 render()를 호출 할 때 여러 함수들을 호출한다.
  Mounting() : DOM의 탄생,
   - component가 mount될 때, screen에 표시될 때, website를 표시할 때 등 constructor를 먼저 호출
   - ? -> render() 호출 -> componentDidMount() 호출
  Updating() : 일반적인 업데이트, 위와 비슷한 사이클.
   - render() -> componentDidUpdate()
  Unmounting() : component가 죽을 때, 페이지 변경, state 교체 등
   - render() -> componentWillMounting()
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

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("Goodbye!");
  }

  render() {
    console.log("I'm rendering");
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
