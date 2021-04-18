import RestLink from "./RestLink";

interface EvolutionDetails {
  gender: null | any,
  held_item: null | any,
  item: null | any,
  known_move: null | any,
  known_move_type: null | any,
  location: null | any,
  min_affection: null | any,
  min_beauty: null | any,
  min_happiness: null | any,
  min_level: number,
  needs_overworld_rain: boolean,
  party_species: null | any,
  party_type: null | any,
  relative_physical_states: null | any,
  time_of_day: string,
  trade_species: null | any,
  trigger: RestLink,
  turn_upside_down: boolean
}

export default EvolutionDetails;
