import RestLink from "./RestLink";

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
      language: RestLink,
      version: RestLink,
    },
  ],
  form_descriptions: [],
  forms_switchable: boolean,
  genera: [
    {
      genus: string,
      language: RestLink,
    }
  ],
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
  names: [
    language: RestLink,
    name: string,
  ],
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
      pokedex: RestLink,
    }
  ],
  shape: RestLink,
  varieties: [
    {
      is_default: boolean,
      pokemon: RestLink,
    }
  ]
}

export default PokemonSpecies;