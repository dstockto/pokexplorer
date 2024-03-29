import * as React from "react";

interface PokemonPictureProps {
  url: string;
  alt: string;
}

function PokemonPicture({ url, alt }: PokemonPictureProps) {
  return <img src={url} alt={`${alt}`} title={alt} />;
}

export default PokemonPicture;
