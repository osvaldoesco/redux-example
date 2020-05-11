import { call, put, takeEvery } from 'redux-saga/effects';
// import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import {
  types,
  fetchSuccess as fetchPokemonListSuccessAction,
  fetchError as fetchPokemonListErrorAction
} from '../actions/pokemon.action';
import { fetchPokemonListApi  } from '../api/pokemon.api';


export function* fetchPokemons() {
  try {
    const fetchPokemonListResponse = yield call(
      fetchPokemonListApi
    );
    yield put(fetchPokemonListSuccessAction(fetchPokemonListResponse.cards));
  } catch (e) {
    yield put(fetchPokemonListErrorAction());
  }
}

export const pokemonSagas = [
  takeEvery(types.FETCH_POKEMON_LIST_REQUEST, fetchPokemons),
];