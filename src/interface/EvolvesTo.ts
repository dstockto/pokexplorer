import EvolutionDetails from "./EvolutionDetails";
import RestLink from "./RestLink";

interface EvolvesTo {
  evolution_details: EvolutionDetails[],
  evolves_to: EvolvesTo[],
  is_baby: boolean,
  species: RestLink,
}

export default EvolvesTo;
