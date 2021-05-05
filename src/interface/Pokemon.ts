import Ability from "./Ability";
import GameIndex from "./GameIndex";
import Move from "./Move";
import Type from "./Type";
import Sprites from "./Sprites";
import Statistic from "./Statistic";
import {RestLink, SpeciesLink} from "./links";

interface Pokemon {
  abilities: Ability[],
  base_experience: number,
  forms: RestLink[],
  game_indices: GameIndex[],
  height: number,
  held_items: [],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Move[],
  name: string,
  order: number,
  past_types: [],
  species: SpeciesLink,
  sprites: Sprites,
  stats: Statistic[],
  types: Type[],
  weight: number,
}

export default Pokemon;
