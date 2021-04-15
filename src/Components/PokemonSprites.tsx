import * as React from "react";
import Sprites from "../interface/Sprites";

interface PokemonSpritesProps {
  sprites: Sprites
}

function PokemonSprites({sprites}: PokemonSpritesProps) {
  return <div>
    {sprites.front_default && <img src={sprites.front_default} alt={'Front default view'} />}
    {sprites.back_default && <img src={sprites.back_default} alt={'Back default view'} />}
    {sprites.front_female && <img src={sprites.front_female} alt={'Front female view'} />}
    {sprites.back_female && <img src={sprites.back_female} alt={'Back female view'} />}
    {sprites.front_shiny && <img src={sprites.front_shiny} alt={'Front shiny view'} />}
    {sprites.back_shiny && <img src={sprites.back_shiny} alt={'Back shiny view'} />}
    {sprites.front_shiny_female && <img src={sprites.front_shiny_female} alt={'Front shiny female view'} />}
    {sprites.back_shiny_female && <img src={sprites.back_shiny_female} alt={'Back shiny female view'} />}

  </div>
}

export default PokemonSprites;
