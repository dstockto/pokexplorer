import {GenerationLink, LanguageLink, PokemonLink} from "./links";
import MoveLink from "./links/MoveLink";
import MoveDamageClassLink from "./links/MoveDamageClassLink";
import TypeLink from "./links/TypeLink";

interface TypeResponse {
  damage_relations: {
    double_damage_from: TypeLink[],
    double_damage_to: TypeLink[],
    half_damage_from: TypeLink[],
    half_damage_to: TypeLink[],
    no_damage_from: TypeLink[],
    no_damage_to: TypeLink[],
  },
  game_indices: {
    game_index: number,
    generation: GenerationLink,
  }[],
  generation: GenerationLink,
  move_damage_class: MoveDamageClassLink,
  moves: MoveLink[],
  name: string,
  names: {
    language: LanguageLink,
    name: string,
  }[],
  pokemon: {
    pokemon: PokemonLink,
    slot: number
  }[]
}

export default TypeResponse;
