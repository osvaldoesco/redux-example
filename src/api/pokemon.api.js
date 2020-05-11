const baseURL = process.env.REACT_APP_POKEMON_URL;

export function fetchPokemonListApi() {
  return fetch(`${baseURL}`).then(response => response.json());
}

export function fetchPokemonDetailApi(id) {
  return fetch(`${baseURL}/${id}`).then(response => response.json());
}


