import TranslatedNameLink from "./TranslatedNameLink";
import {GeneraLink, LanguageLink, PokedexLink, PokemonLink, RestLink, VersionLink} from "./links";
import PokemonSpeciesVariety from "./PokemonSpeciesVariety";

interface PokemonSpecies {
  base_happiness: number,
  capture_rate: number,
  color: RestLink,
  egg_groups: RestLink[],
  evolution_chain: {
    url: string,
  },
  evolves_from_species: RestLink,
  flavor_text_entries: [
    {
      flavor_text: string,
      language: LanguageLink,
      version: VersionLink,
    },
  ],
  form_descriptions: [],
  forms_switchable: boolean,
  gender_rate: number,
  genera: GeneraLink[],
  generation: RestLink,
  growth_rate: RestLink,
  habitat: RestLink,
  has_gender_differences: boolean,
  hatch_counter: number,
  id: number,
  is_baby: boolean,
  is_legendary: boolean,
  is_mythical: boolean,
  name: string,
  names: TranslatedNameLink[],
  order: 2,
  pal_park_encounters: [
    {
      area: RestLink,
      base_score: number,
      rate: number,
    }
  ],
  pokedex_numbers: [
    {
      entry_number: number,
      pokedex: PokedexLink,
    }
  ],
  shape: RestLink,
  varieties: PokemonSpeciesVariety[],
}

export default PokemonSpecies;
