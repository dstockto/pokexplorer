import { useQueryClient } from "react-query";
import fetchSpeciesByUrl from "./fetchSpeciesByUrl";

function usePrefetchPokemonDetails(url: string) {
  const queryClient = useQueryClient();
  return queryClient.prefetchQuery(["pokemon", url], () => {
    return fetchSpeciesByUrl(url);
  });
}

export default usePrefetchPokemonDetails;
