import {useQuery} from "react-query";
import TypeResponse from "../interface/TypeResponse";

function usePokemonType(url: string | undefined) {
  return useQuery<TypeResponse, Error>(
    ['pokemon-type', url],
    () => {
      if (url === undefined) {
        return Promise.reject();
      }
      return fetch(url).then(res => res.json());
    },
    {
      enabled: !!url
    }
  )
}

export default usePokemonType;
