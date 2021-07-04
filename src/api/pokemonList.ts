function getPokemonList() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=11000").then((res) =>
    res.json()
  );
}

export default getPokemonList;
