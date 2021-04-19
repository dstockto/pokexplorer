import * as React from "react";
import {useState} from "react";
import RestLink from "../interface/RestLink";
import usePokemonSpecies from "../api/usePokemonSpecies";
import PokemonSpecies from "../interface/PokemonSpecies";
import PokemonApiPicture from "./PokemonApiPicture";


interface SpeciesPicturesProps {
  speciesLink: RestLink
}

function SpeciesPictures({speciesLink}: SpeciesPicturesProps) {
  const {isLoading, data} = usePokemonSpecies(speciesLink.url);
  const [pokemonNumber, setPokemonNumber] = useState(0);

  if (isLoading) {
    return null;
  }

  const species: PokemonSpecies = data;
  const varietyCount = species.varieties.length;

  if (varietyCount === 1) {
    return <PokemonApiPicture pokemonLink={species.varieties[pokemonNumber].pokemon}/>
  }
  return (
    <div>
      <button onClick={() => {
        setPokemonNumber((pokemonNumber + 1) % varietyCount)
      }} >
        <PokemonApiPicture pokemonLink={species.varieties[pokemonNumber].pokemon} />
      </button>
    </div>
  );
}

export default SpeciesPictures;
