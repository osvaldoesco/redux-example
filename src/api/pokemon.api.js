const baseURL = process.env.REACT_APP_POKEMON_URL;

export function fetchPokemonList() {
  return fetch(`${baseURL}`).then(response => response.json());
}

export function fetchPokemonDetail(id) {
  return fetch(`${baseURL}/${id}`).then(response => response.json());
}


