import React from 'react';

// Map Recap & key props

/*
  list는 key props를 지정해줘야 error가 발생하지 않는다.
  react가 자체적으로 사용하는 속성이라 꼭 args로 받을 필요는 없다.
*/

function Food({ name, picture }) {
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>);
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-44ac2cd7c76daaa5ffaffe1997f69584&f=1&nofb=1"
  },
  {
    id: 2,
    name: "Ramen",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F1126D0405101E9FE038AB4&f=1&nofb=1"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
