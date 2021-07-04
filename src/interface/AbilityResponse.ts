import {
  GenerationLink,
  LanguageLink,
  PokemonLink,
  VersionGroupLink,
} from "./links";

interface AbilityResponse {
  effect_changes: {
    effect_entries: {
      effect: string;
      language: LanguageLink;
    }[];
    version_group: VersionGroupLink;
  }[];
  effect_entries: {
    effect: string;
    language: LanguageLink;
    short_effect: string;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: LanguageLink;
    version_group: VersionGroupLink;
  }[];
  generations: GenerationLink[];
  id: number;
  is_main_series: boolean;
  names: {
    language: LanguageLink;
    name: string;
  }[];
  pokemon: {
    is_hidden: boolean;
    pokemon: PokemonLink;
    slot: number;
  }[];
}

export default AbilityResponse;
