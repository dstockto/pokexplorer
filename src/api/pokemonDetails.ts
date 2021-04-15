import {useQuery} from "react-query";

function usePokemonDetails(url: string) {
  return useQuery(['pokemon', url], () => {
    return fetch(url).then(res => res.json());
  },
    {cacheTime: 60*60*1000}
  );
}

export default usePokemonDetails;
