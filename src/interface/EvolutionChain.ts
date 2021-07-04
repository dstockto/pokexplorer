import EvolutionDetails from "./EvolutionDetails";
import EvolvesTo from "./EvolvesTo";
import { SpeciesLink } from "./links";

interface EvolutionChain {
  baby_trigger_item: string | null;
  chain: {
    evolution_details: EvolutionDetails[];
    evolves_to: EvolvesTo[];
    is_baby: boolean;
    species: SpeciesLink;
  };
  id: number;
}

export default EvolutionChain;
