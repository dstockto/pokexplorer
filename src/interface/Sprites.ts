type generation = {
  name: string
};

interface GameMap {
  back_default?: string|null,
  back_female?: string|null,
  back_shiny?: string|null,
  back_shiny_female?: string|null,
  front_default?: string|null,
  front_female?: string|null,
  front_shiny?: string|null,
  front_shiny_female?: string|null,
}

interface Sprites {
  back_default: string|null,
  back_female: string|null,
  back_shiny: string|null,
  back_shiny_female: string|null,
  front_default: string|null,
  front_female: string|null,
  front_shiny: string|null,
  front_shiny_female: string|null,
  other: Map<string, Map<string, string|null>>,
  versions: Map<generation, GameMap>
}

export default Sprites;
