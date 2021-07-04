import * as React from "react";
import {useState} from "react";
import Ability from "../interface/Ability";
import {GeneraLink} from "../interface/links";
import '../style/pokemon-info.css';
import PokemonAbility from "./PokemonAbility";
import {Button} from "antd";
import {titleCase} from "title-case";
import {decimetersToFeetAndInches, genderRateToIcons, generaToCategory, hectogramsToPounds} from "../functions";

interface PokemonInfoBlockProps {
  height: number,
  category: GeneraLink[],
  weight: number,
  abilities: Ability[]
  genderRate: number,
}

function renderAbilities(abilities: Ability[], setAbilityInfo: (info: AbilityInfo | null) => void) {
  return (<ul className={'pokemon-abilities'}>
      {
        abilities
          .map(ability =>
            <PokemonAbility
              key={ability.ability.name}
              abilityLink={ability.ability}
              setAbility={setAbilityInfo}
              isHidden={ability.is_hidden}
            />
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
          <Button type={"dashed"} onClick={() => setAbilityInfo(null)} className={'close-button'}>X Close</Button>
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
