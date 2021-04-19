import * as React from "react";
import arrow from "../img/arrow.svg";
import SpeciesLink from "../interface/SpeciesLink";
import SpeciesPictures from "./SpeciesPictures";

interface EvolutionChainProps {
  chain: SpeciesLink[] // species
}

function EvolutionChain({chain}: EvolutionChainProps) {
  // a species has varieties of pokemon
  return (
    <div className={'evolution-chain'}>
      {chain.map((species, i) => {
          if (i > 0) {
            return [
              <img key={`arrow-${i}`} src={arrow} alt={'arrow'}/>,
              <SpeciesPictures key={`${species.name}-${i}`} speciesLink={species} />
            ];
          } else {
            return <SpeciesPictures key={`${species.name}-${i}`} speciesLink={species} />
          }
        })
      }
    </div>
  );
}

export default EvolutionChain;
