import * as React from "react";
import SpeciesLink from "../interface/SpeciesLink";
import usePokemonSpecies from "../api/usePokemonSpecies";
import LoadingSpinner from "./LoadingSpinner";

interface PokemonSpeciesFlavorTextProps {
  species: SpeciesLink
}

function PokemonSpeciesFlavorText({species}: PokemonSpeciesFlavorTextProps) {
  const {isLoading, data: pokemonSpecies} = usePokemonSpecies(species.url);

  if (isLoading) {
    return <LoadingSpinner/>
  }

  if (pokemonSpecies === undefined) {
    return <LoadingSpinner/>;
  }

  return (
    <p className={'flavor-text'}>
      <em>
        {pokemonSpecies?.flavor_text_entries
          .filter((textEntry) => textEntry.language.name === 'en')[0].flavor_text.replace('\n', ' ')}
      </em>
    </p>
  );
}

export default PokemonSpeciesFlavorText;
