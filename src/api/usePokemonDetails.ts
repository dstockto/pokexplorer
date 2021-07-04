import { useQuery } from "react-query";
import fetchPokemonByUrl from "./fetchPokemonByUrl";
import Pokemon from "../interface/Pokemon";

function usePokemonDetails(url: string) {
  return useQuery<Pokemon, Error>(["pokemon", url], () => {
    return fetchPokemonByUrl(url);
  });
}

export default usePokemonDetails;
