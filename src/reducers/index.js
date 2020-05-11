import { combineReducers } from 'redux';
import pokemonReducer from './pokemons.reducer'

const appReducer = combineReducers({
  pokemons: pokemonReducer,
});
export default appReducer;