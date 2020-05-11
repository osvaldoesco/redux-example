import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
  fetchError,
  fetchRequest,
  fetchSuccess
} from '../../actions/pokemon.action';
import { fetchPokemonList } from '../../api/pokemon.api';
import PokemonListComponent  from '../../components/pokemons/PokemonList';

function PokemonList() {

  const dispatch = useDispatch();
  const {list: pokeCards, error, loading } = useSelector(({pokemons}) => pokemons);

  useEffect(() => {
    dispatch(fetchRequest());
    fetchPokemonList()
      .then((response) => {
        console.log('list', response);
        dispatch(fetchSuccess(response.cards));
      })
      .catch(err => {
        dispatch(fetchError());
        console.log('err', err);
      });
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <PokemonListComponent 
          error={error} 
          loading={loading}
          pokeCards={pokeCards}/>
      </div>
    </div>
    
  );
}

export default PokemonList;
