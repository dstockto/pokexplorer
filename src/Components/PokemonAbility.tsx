import * as React from "react";
import { AbilityLink } from "../interface/links";
import usePokemonAbility from "../api/usePokemonAbility";
import AbilityResponse from "../interface/AbilityResponse";
import { Button } from "antd";
import { pokemonName } from "../functions";

interface PokemonAbilityProps {
  abilityLink: AbilityLink;
  setAbility: (info: AbilityInfo) => void;
  isHidden: boolean;
}

interface AbilityInfo {
  name: string;
  flavorText: string;
}

function PokemonAbility({
  abilityLink: link,
  setAbility,
  isHidden,
}: PokemonAbilityProps) {
  function renderAbilityInfo(
    isLoading: boolean,
    data: undefined | AbilityResponse
  ) {
    if (isLoading || data === undefined) {
      return null;
    }

    const englishFlavorTexts = data.effect_entries.filter(
      (fte) => fte.language.name === "en"
    );
    if (englishFlavorTexts.length === 0) {
      return null;
    }
    const effect = englishFlavorTexts[0].short_effect;
    const name = link.name;

    return (
      <Button
        type={"text"}
        onClick={() => setAbility({ name, flavorText: effect })}
      >
        ❔
      </Button>
    );
  }

  const { name, url } = link;
  const { isLoading, data } = usePokemonAbility(url);
  return (
    <li key={name} className={isHidden ? "hidden-ability" : ""}>
      {pokemonName(name)} {renderAbilityInfo(isLoading, data)}
    </li>
  );
}

export default PokemonAbility;
