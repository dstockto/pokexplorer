export default async function fetchPokemonByUrl(speciesUrl: string) {
  return await fetch(speciesUrl).then((res) => res.json());
}
