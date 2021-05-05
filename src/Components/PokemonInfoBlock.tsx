import * as React from "react";
import {useState} from "react";
import Ability from "../interface/Ability";
import {GeneraLink} from "../interface/links";
import '../style/pokemon-info.css';
import PokemonAbility from "./PokemonAbility";
import {Button} from "antd";
import {titleCase} from "title-case";

interface PokemonInfoBlockProps {
  height: number,
  category: GeneraLink[],
  weight: number,
  abilities: Ability[]
  genderRate: number,
}

function decimetersToFeetAndInches(height: number) {
  const inches = height * 3.9370079;
  const feet = Math.floor(inches / 12);
  const remainder = inches - (feet * 12);
  return `${feet}' ${Math.ceil(remainder)}"`;
}

function hectogramsToPounds(weight: number) {
  const ounces = weight * 3.5273962;
  const pounds = Math.floor(ounces / 16);
  const remainder = Math.ceil(ounces - (pounds * 16));
  return `${pounds} lbs ${remainder} oz`;
}

function genderRateToIcons(genderRate: number) {
  if (genderRate === -1) {
    return 'Genderless';
  }
  return 'Male / Female';
}

function generaToCategory(category: GeneraLink[]) {
  const genera = category.filter((link) => link.language.name === 'en');
  if (genera.length === 0) {
    return 'Unknown Category';
  }
  return genera[0].genus.replace(' Pokémon', '');
}

function renderAbilities(abilities: Ability[], setAbilityInfo: (info: AbilityInfo | null) => void) {
  return (<ul className={'pokemon-abilities'}>
      {
        abilities
          .filter((ability) => !ability.is_hidden)
          .map(ability =>
            <PokemonAbility abilityLink={ability.ability} setAbility={setAbilityInfo}/>
          )
      }
    </ul>
  );
}

interface AbilityInfo {
  name: string,
  flavorText: string,
}

function PokemonInfoBlock({height, weight, category, abilities, genderRate}: PokemonInfoBlockProps) {
  const [abilityInfo, setAbilityInfo] = useState<AbilityInfo | null>(null);

  if (abilityInfo) {
    return (
      <div className={'pokemon-info ability-info'}>
        <div className={'column'}>
          <div className={'ability-name'}>{titleCase(abilityInfo.name)}</div>
          <div className={'description'}>{abilityInfo.flavorText}</div>
        </div>
        <div className={'column'}>
          <Button type={"dashed"} onClick={() => setAbilityInfo(null)} className={'close-button'}>X</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={'pokemon-info'}>
      <div className={'column'}>
        <div><span className={'heading'}>Height</span> <span
          className={'data'}> {decimetersToFeetAndInches(height)}</span></div>
        <div><span className={'heading'}>Weight</span> <span className={'data'}>{hectogramsToPounds(weight)}</span>
        </div>
        <div><span className={'heading'}>Gender</span> <span className={'data'}>{genderRateToIcons(genderRate)}</span>
        </div>
      </div>
      <div className={'column'}>
        <div><span className={'heading'}>Category</span> <span className={'data'}>{generaToCategory(category)}</span>
        </div>
        <div><span className={'heading'}>Abilities</span> <span
          className={'data'}>{renderAbilities(abilities, setAbilityInfo)}</span>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfoBlock;
