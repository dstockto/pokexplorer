import {useQuery} from "react-query";

function usePokemonDetails(url: string) {
  return useQuery(['pokemon', url], () => {
    return fetch(url).then(res => res.json());
  });
}

export default usePokemonDetails;
