import * as React from "react";
import usePokemonDetails from "../api/usePokemonDetails";
import Pokemon from "../interface/Pokemon";
import PokemonColor from "./PokemonColor";
import PokemonOfficialArt from "./PokemonOfficialArt";
import usePokemonSpecies from "../api/usePokemonSpecies";
import LoadingSpinner from "./LoadingSpinner";
import PokemonSpeciesFlavorText from "./PokemonSpeciesFlavorText";
import PokemonHeader from "./PokemonHeader";
import PokemonSpecies from "../interface/PokemonSpecies";
import PokemonInfoBlock from "./PokemonInfoBlock";
import PokemonStatsBars from "./PokemonStatsBars";
import PokemonTypes from "./PokemonTypes";
import PokemonWeaknesses from "./PokemonWeaknesses";
import { pokemonName } from "../functions";
import AlternateForms from "./AlternateForms";
import { PokemonLink } from "../interface/links";

interface PokemonDetailsProps {
  url: string;
  setPokemon: (url: PokemonLink) => void;
}

function PokemonDetails({ url, setPokemon }: PokemonDetailsProps) {
  const details = usePokemonDetails(url);
  const speciesData = usePokemonSpecies(details?.data?.species?.url || "");
  if (details.isLoading || speciesData.isLoading) {
    return <LoadingSpinner />;
  }

  if (details.data === undefined || speciesData.data === undefined) {
    return <LoadingSpinner />;
  }

  const pokemon: Pokemon = details.data;
  const species: PokemonSpecies = speciesData.data;

  return (
    <PokemonColor color={species.color.name}>
      <PokemonHeader name={pokemonName(pokemon.name)} id={pokemon.id} />
      <AlternateForms varieties={species.varieties} setPokemon={setPokemon} />
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <PokemonOfficialArt sprites={pokemon.sprites} />
          <PokemonStatsBars stats={pokemon.stats} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <PokemonSpeciesFlavorText species={pokemon.species} />
          <PokemonInfoBlock
            height={pokemon.height}
            category={species.genera}
            weight={pokemon.weight}
            abilities={pokemon.abilities}
            genderRate={species.gender_rate}
          />
          <PokemonTypes types={pokemon.types} />
          <PokemonWeaknesses types={pokemon.types} />
        </div>
      </div>
      {/*<PokemonEvolution species={species.data}/>*/}
      {/*<PokemonTypes types={pokemon.types}/>*/}
      {/*<div className={'height'}><strong>Height:</strong> {pokemon.height}</div>*/}
      {/*<div className={'weight'}><strong>Weight:</strong> {pokemon.weight}</div>*/}
      {/*<PokemonSpeciesInfo species={pokemon.species.url}/>*/}
      {/*<PokemonMoves moves={pokemon.moves} initial_collapsed={true}/>*/}
      {/*<div className={'images'}>*/}
      {/*  <PokemonSprites sprites={pokemon.sprites}/>*/}
      {/*</div>*/}
    </PokemonColor>
  );
}

export default PokemonDetails;
