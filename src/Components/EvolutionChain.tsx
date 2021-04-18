import * as React from "react";
import RestLink from "../interface/RestLink";
import SpeciesPicture from "./SpeciesPicture";
import arrow from "../img/arrow.svg";

interface EvolutionChainProps {
  chain: RestLink[]
}

function EvolutionChain({chain}: EvolutionChainProps) {
  return (
    <div className={'evolution-chain'}>
      {chain.map((species, i) => {
          if (i > 0) {
            return [
              <img key={`arrow-${i}`} src={arrow} alt={'arrow'}/>,
              <SpeciesPicture key={`species.name-post-arrow`} species={species}/>
            ];
          } else {
            return <SpeciesPicture key={species.name} species={species}/>;
          }
        }
      )
      }
    </div>
  );
}

export default EvolutionChain;
