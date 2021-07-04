import { useQuery } from "react-query";

function usePokemonDetailsById(id: number) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  return useQuery(["pokemon", url], () => {
    return fetch(url).then((res) => res.json());
  });
}

export default usePokemonDetailsById;
