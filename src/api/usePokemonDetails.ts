import {useQuery} from "react-query";
import fetchPokemonByUrl from "./fetchPokemonByUrl";

function usePokemonDetails(url: string) {
  return useQuery(['pokemon', url], () => {
    return fetchPokemonByUrl(url);
  });
}

export default usePokemonDetails;
