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
  front_default: string,
  front_female: string|null,
  front_shiny: string|null,
  front_shiny_female: string|null,
  other: {
    dream_world: {
      front_default: string|null,
    },
    "official-artwork": {
      front_default: string|null,
    },
  },
  versions: Map<generation, GameMap>
}

export default Sprites;
