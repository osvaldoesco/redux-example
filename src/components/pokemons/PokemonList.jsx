import React from 'react';

import PokemonItem from './PokemonItem';

const PokemonList = ({pokeCards, error, loading}) => {
  if (error) {
    return (
      <div className="alert alert-danger">
        <strong>Error!</strong> There was a problem fetching your pokecards.
      </div>
    );
  }
  
  if (loading) {
    return ( 
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return ( 
    <div className="row"> 
      {pokeCards.map(card => {
        return (
          <PokemonItem  
            card={card} 
            key={card.id} />
        )
      })}
    </div>
  );
}

export default PokemonList;