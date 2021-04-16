import * as React from "react";
import Sprites from "../interface/Sprites";

interface PokemonOfficialArtProps {
  sprites: Sprites,
}

function PokemonOfficialArt({sprites}: PokemonOfficialArtProps) {
  const imgUrl = sprites.other["official-artwork"].front_default;
  if (imgUrl === null) {
    return null;
  }

  return (
    <div className={'official-art'}>
      <img src={imgUrl} alt={"official pokemon art"} />
    </div>
  );
}

export default PokemonOfficialArt;
