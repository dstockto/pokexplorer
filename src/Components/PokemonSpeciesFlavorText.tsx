import * as React from "react";
import usePokemonSpecies from "../api/usePokemonSpecies";
import LoadingSpinner from "./LoadingSpinner";
import { SpeciesLink } from "../interface/links";
import "../style/flavor-text.css";

interface PokemonSpeciesFlavorTextProps {
  species: SpeciesLink;
}

function PokemonSpeciesFlavorText({ species }: PokemonSpeciesFlavorTextProps) {
  const { isLoading, data: pokemonSpecies } = usePokemonSpecies(species.url);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (pokemonSpecies === undefined) {
    return <LoadingSpinner />;
  }

  return (
    <div className={"flavor-text"}>
      <p>
        {pokemonSpecies?.flavor_text_entries
          .filter((textEntry) => textEntry.language.name === "en")[0]
          .flavor_text.replace(/\\n|\f/, " ")}
      </p>
    </div>
  );
}

export default PokemonSpeciesFlavorText;
