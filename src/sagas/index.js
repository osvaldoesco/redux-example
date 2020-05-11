import { all } from 'redux-saga/effects';
import {pokemonSagas} from './pokemon.saga';

export default function* rootSaga() {
  yield all([
    ...pokemonSagas,
  ]);
}