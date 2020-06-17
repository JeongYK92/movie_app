import React from 'react';

// jsx + props

// function Food(props) {
  // return <h1>I like {props.fav}.</h1>;
function Food({ fav }) {
  // console.log(props);
  return <h1>I like {fav}.</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello?</h1>
      {/* Food component에 fav라는 이름의 property(prop)를 kimchi라는 value로 할당 */}
      {/* component는 대문자로 시작, props는 첫 번째 args로 전달 */}
      <Food fav="kimchi" something={true} />
      <Food fav="ramen" something={true} />
    </div>
  );
}

export default App;
