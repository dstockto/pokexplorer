import EvolutionDetails from "./EvolutionDetails";
import { SpeciesLink } from "./links";

interface EvolvesTo {
  evolution_details: EvolutionDetails[];
  evolves_to: EvolvesTo[];
  is_baby: boolean;
  species: SpeciesLink;
}

export default EvolvesTo;
