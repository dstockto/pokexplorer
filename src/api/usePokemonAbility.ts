import {useQuery} from "react-query";
import AbilityResponse from "../interface/AbilityResponse";

function usePokemonAbility(url: string) {
  return useQuery<AbilityResponse, Error>(['ability', url], () => {
    return fetch(url).then(res => res.json());
  })
}

export default usePokemonAbility;
