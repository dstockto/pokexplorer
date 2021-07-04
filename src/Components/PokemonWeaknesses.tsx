import * as React from "react";
import usePokemonType from "../api/usePokemonType";
import Type from "../interface/Type";
import LoadingSpinner from "./LoadingSpinner";
import "../style/pokemon-weaknesses.css";
import TypeResponse from "../interface/TypeResponse";
import Poketype from "./Poketype";

interface PokemonWeaknessesProps {
  types: Type[];
}

function renderTypes(
  title: string,
  key:
    | "double_damage_from"
    | "double_damage_to"
    | "half_damage_from"
    | "half_damage_to"
    | "no_damage_from"
    | "no_damage_to",
  type1Data: TypeResponse,
  type2Data: TypeResponse | undefined
) {
  let types: string[] = [];

  type1Data.damage_relations[key].forEach((type) => {
    types.push(type.name);
  });
  if (type2Data) {
    type2Data.damage_relations[key].forEach((type) => {
      types.push(type.name);
    });
  }

  if (types.length === 0) {
    return null;
  }

  types.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a === b) {
      return 0;
    }
    return 1;
  });

  return (
    <div className={"damage-relations"}>
      <div className={"title"}>{title}</div>
      <div className={"type-list"}>
        {types.map((type, i) => (
          <Poketype key={`${type}-${i}`} type={type} />
        ))}
      </div>
    </div>
  );
}

function PokemonWeaknesses({ types }: PokemonWeaknessesProps) {
  const { isLoading: type1Loading, data: type1Data } = usePokemonType(
    types[0].type.url
  );
  const { isLoading: type2Loading, data: type2Data } = usePokemonType(
    types[1]?.type.url
  );

  if (type1Loading || type2Loading) {
    return <LoadingSpinner />;
  }

  if (!type1Data) {
    return <LoadingSpinner />;
  }

  return (
    <div className={"pokemon-weaknesses"}>
      <div>
        {renderTypes(
          "Defensive Weaknesses (2x damage)",
          "double_damage_from",
          type1Data,
          type2Data
        )}
      </div>
      <div>
        {renderTypes(
          "Attack Weaknesses (1/2 damage)",
          "half_damage_to",
          type1Data,
          type2Data
        )}
      </div>
      <div>
        {renderTypes("Unable to Damage", "no_damage_to", type1Data, type2Data)}
      </div>
      <div>
        {renderTypes("Immune From", "no_damage_from", type1Data, type2Data)}
      </div>
      <div>
        {renderTypes(
          "Attack Strengths (2x damage)",
          "double_damage_to",
          type1Data,
          type2Data
        )}
      </div>
      <div>
        {renderTypes(
          "Defensive Strengths (1/2 damage)",
          "half_damage_from",
          type1Data,
          type2Data
        )}
      </div>
    </div>
  );
}

export default PokemonWeaknesses;
