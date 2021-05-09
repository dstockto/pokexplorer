import {titleCase} from "title-case";

export function pokemonName(name: string) {
  return titleCase(name.replace('-', ' '));
}
