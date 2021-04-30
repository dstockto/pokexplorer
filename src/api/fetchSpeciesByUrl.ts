export default async function fetchSpeciesByUrl(speciesUrl: string) {
  return await fetch(speciesUrl).then(res => res.json());
}
