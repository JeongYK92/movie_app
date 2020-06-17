import React from 'react';
import PropTypes from 'prop-types';

// Protection with PropTypes
// search : prop types react
/*
npm install prop-types --save
*/

function Food({ name, picture, rating }) {
  return (<div>
    <h2>I like {name}</h2>
    <h4>Rating : {rating} / 5.0</h4>
    <img src={picture} alt={name} />
  </div>);
}

// isRequired = 해당 prop은 반드시 있어야 한다.(필수)
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  // rating: PropTypes.string.isRequired // Failed prop type: Invalid prop `rating` of type `number` supplied to `Food`, expected `string`
  rating: PropTypes.number
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-44ac2cd7c76daaa5ffaffe1997f69584&f=1&nofb=1",
    rating: 4.9
  },
  {
    id: 2,
    name: "Ramen",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F1126D0405101E9FE038AB4&f=1&nofb=1",
    rating: 4.5
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
  );
}

export default App;
