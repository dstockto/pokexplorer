import {useQuery} from "react-query";

function useEvolutionChain(evolutionChain: string) {
  return useQuery(
    ['evolution-chain', evolutionChain],
    () => {
      return fetch(evolutionChain).then(res => res.json());
    },
    {
      enabled: !!evolutionChain
    }
  );
}

export default useEvolutionChain;

