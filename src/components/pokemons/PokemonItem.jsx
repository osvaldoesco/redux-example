import React from 'react';
import { Link } from 'react-router-dom';

const PokemonItem = ({card}) =>  {
  return (
    <div className="col-md-3">
      <div key={card.id} className="card mt-5">
        <img className="card-img-top" src={card.imageUrlHiRes} alt={card.name} />
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text"><b>Types: </b>{card.types?.join(', ')}</p>
          <Link to={`/pokemons/${card.id}`} className="btn btn-danger">GO!</Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonItem;