import * as React from "react";
import Statistic from "../interface/Statistic";
import BlockBar from "./BlockBar";
import "../style/pokemon-bargraph.css";

interface PokemonStatsBarsProps {
  stats: Statistic[]
}

function PokemonStatsBars({stats}: PokemonStatsBarsProps) {
  const statMap = new Map<string, number>(
    stats.map((stat) => {
      return [stat.stat.name, Math.floor(stat.base_stat/16)];
    })
  );

  return (
    <div className={'stats-block'}>
      <div className={'title'}>Stats</div>
      <div className={'stats-graphs'}>
        <BlockBar name={'HP'} value={statMap.get('hp')}/>
        <BlockBar name={'Attack'} value={statMap.get('attack')}/>
        <BlockBar name={'Defense'} value={statMap.get('defense')}/>
        <BlockBar name={'Special Attack'} value={statMap.get('special-attack')}/>
        <BlockBar name={'Special Defense'} value={statMap.get('special-defense')}/>
        <BlockBar name={'Speed'} value={statMap.get('speed')}/>
      </div>
    </div>
  )
}

export default PokemonStatsBars;
