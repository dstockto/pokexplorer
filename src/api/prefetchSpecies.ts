import { QueryClient } from "react-query";
import fetchSpeciesByUrl from "./fetchSpeciesByUrl";

export default function prefetchSpecies(url: string, queryClient: QueryClient) {
  queryClient.prefetchQuery(["species", url], () => fetchSpeciesByUrl(url));
}
