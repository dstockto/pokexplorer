import * as React from "react";
import usePokemonSpecies from "../api/usePokemonSpecies";
import LoadingSpinner from "./LoadingSpinner";

interface PokemonSpeciesInfoProps {
  species: string
}

function PokemonSpeciesInfo({species} : PokemonSpeciesInfoProps) {
  const speciesInfo = usePokemonSpecies(species);
  if (speciesInfo.isLoading) {
    return (<LoadingSpinner />)
  }

  const genus = speciesInfo.data.genera.filter((genera: any) => genera.language.name === 'en')[0].genus;
  return <div><strong>Genus:</strong> {genus}</div>;
}

export default PokemonSpeciesInfo;
