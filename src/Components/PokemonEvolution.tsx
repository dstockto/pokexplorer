import * as React from "react";
import PokemonSpecies from "../interface/PokemonSpecies";
import useEvolutionChain from "../api/useEvolutionChain";
import RestLink from "../interface/RestLink";
import EvolvesTo from "../interface/EvolvesTo";
import EvolutionChain from "./EvolutionChain";

interface PokemonEvolutionProps {
  species: PokemonSpecies
}

function buildEvolutionChains(chain: RestLink[], tree: EvolvesTo, chains: RestLink[][]) {
  let newChain = [...chain, tree.species];

  if (tree.evolves_to.length === 0) {
    chains.push(newChain);
    return;
  }

  for (let i = 0; i < tree.evolves_to.length; i++) {
    buildEvolutionChains(newChain, tree.evolves_to[i], chains);
  }
}

function PokemonEvolution({species}:PokemonEvolutionProps) {
  const evolution = useEvolutionChain(species.evolution_chain.url);
  if (evolution.isLoading) {
    return <p>Evolution loading...</p>
  }
  const tree: EvolvesTo = evolution.data.chain;

  let chains: RestLink[][] = [];
  buildEvolutionChains([], tree, chains);

  return (
    <div>
      <h2>Evolution Chain</h2>
      {chains.map((chain, i) => {
        return <EvolutionChain key={`evolution-${species.name}-${i}`} chain={chain}/>;
      })}
    </div>
)

}

export default PokemonEvolution;