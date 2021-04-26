import * as React from "react";
import {useState} from "react";
import RestLink from "../interface/RestLink";
import usePokemonSpecies from "../api/usePokemonSpecies";
import PokemonSpecies from "../interface/PokemonSpecies";
import PokemonApiPicture from "./PokemonApiPicture";
import LoadingSpinner from "./LoadingSpinner";
import "../style/pokemon-picture.css";

interface SpeciesPicturesProps {
  speciesLink: RestLink
}

function SpeciesPictures({speciesLink}: SpeciesPicturesProps) {
  const {isLoading, data} = usePokemonSpecies(speciesLink.url);
  const [pokemonNumber, setPokemonNumber] = useState(0);

  if (isLoading) {
    return <LoadingSpinner/>;
  }

  const species: PokemonSpecies | undefined = data;
  if (species === undefined) {
    return <LoadingSpinner/>;
  }
  const varietyCount = species.varieties.length;

  if (varietyCount === 1) {
    return <PokemonApiPicture pokemonLink={species.varieties[pokemonNumber].pokemon}/>
  }
  return (
    <div className={'pokemon-toggle-pic'}>
      <button onClick={() => {
        setPokemonNumber((pokemonNumber + 1) % varietyCount)
      }}>
        <PokemonApiPicture pokemonLink={species.varieties[pokemonNumber].pokemon}/>
        <span className={'clickable'}>➢</span>
      </button>
    </div>
  );
}

export default SpeciesPictures;
