import {useQuery} from "react-query";

function useEvolutionChain(evolutionChain: string | undefined) {
  return useQuery(
    ['evolution-chain', evolutionChain],
    () => {
      if (evolutionChain === undefined) {
        return null;
      }
      return fetch(evolutionChain).then(res => res.json());
    },
    {
      enabled: !!evolutionChain
    }
  );
}

export default useEvolutionChain;

