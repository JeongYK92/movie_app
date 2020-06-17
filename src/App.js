import React from 'react';

// Dynamic Component Generation & map
/*
map
const friends = [ "aaa", "bbb", "ccc", "ddd" ];
friends.map(current=> {
  console.log(current);
  return 0; // return current + "😁";
}); // 각 아이템 출력, array의 값을 return값으로 변경하고 리턴
*/
function Food({ name, picture }) {
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>);
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwoochonfood.com%2Fwp-content%2Fuploads%2F2019%2F05%2F%25EB%25B0%25B0%25EC%25B6%2594%25EA%25B9%2580%25EC%25B9%2598-Napa-Cabbage-Kimchi.jpg&f=1&nofb=1"
  },
  {
    name: "Ramen",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F1126D0405101E9FE038AB4&f=1&nofb=1"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
