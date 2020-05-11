import { types } from '../actions/pokemon.action';

const initialState = {
  list: [],
  selected: null,
  error: false,
  loading: false,
};

export default function(state = initialState, action){

  switch (action.type) {
    case types.FETCH_POKEMON_LIST_REQUEST:
      return {...state, loading: true, error: false};

    case types.FETCH_POKEMON_LIST_SUCCESS:
      const { list } = action.payload;
      return {...state, list, error: false, loading: false}; 

    case types.FETCH_POKEMON_LIST_FAILURE:
      return {...state, error: true};
    
    case types.FETCH_POKEMON_REQUEST:
      return {...state, loading: true, error: false};

    case types.FETCH_POKEMON_SUCCESS:
      const { selected } = action.payload;
      return {...state, selected, error: false, loading: false}; 

    case types.FETCH_POKEMON_FAILURE:
      return {...state, error: true};
    default:
      return state;
  }
}

