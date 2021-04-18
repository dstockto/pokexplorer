import RestLink from "./RestLink";
import EvolutionDetails from "./EvolutionDetails";
import EvolvesTo from "./EvolvesTo";

interface EvolutionChain {
  baby_trigger_item: string|null,
  chain: {
    evolution_details: EvolutionDetails[],
    evolves_to: EvolvesTo[],
    is_baby: boolean,
    species: RestLink,
  },
  id: number,
}

export default EvolutionChain;
