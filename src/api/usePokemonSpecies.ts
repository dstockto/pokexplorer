import { useQuery, UseQueryResult } from "react-query";
import fetchSpeciesByUrl from "./fetchSpeciesByUrl";
import PokemonSpecies from "../interface/PokemonSpecies";

function usePokemonSpecies(
  speciesUrl: string
): UseQueryResult<PokemonSpecies | undefined, Error> {
  return useQuery(
    ["species", speciesUrl],
    (): Promise<PokemonSpecies> => fetchSpeciesByUrl(speciesUrl),
    {
      enabled: !!speciesUrl,
    }
  );
}

export default usePokemonSpecies;
