import * as React from "react";
import Ability from "../interface/Ability";
import {GeneraLink} from "../interface/links";
import '../style/pokemon-info.css';

interface PokemonInfoBlockProps {
  height: number,
  category: GeneraLink[],
  weight: number,
  abilities: Ability[]
  genderRate: number,
}

function decimetersToFeetAndInches(height: number) {
  const inches = height * 3.9370079;
  const feet = Math.floor(inches/12);
  const remainder = inches - (feet*12);
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

function renderAbilities(abilities: Ability[]) {
  return abilities.filter((ability) => !ability.is_hidden)
    .map(ability => ability.ability.name);
}

function PokemonInfoBlock({height, weight, category, abilities, genderRate}: PokemonInfoBlockProps) {
  return (
    <div className={'pokemon-info'}>
      <div className={'column'}>
        <div><span className={'heading'}>Height</span> {decimetersToFeetAndInches(height)}</div>
        <div><span className={'heading'}>Weight</span> {hectogramsToPounds(weight)}</div>
        <div><span className={'heading'}>Gender</span> {genderRateToIcons(genderRate)}</div>
      </div>
      <div className={'column'}>
        <div><span className={'heading'}>Category</span> {generaToCategory(category)}</div>
        <div><span className={'heading'}>Abilities</span> {renderAbilities(abilities)} </div>
      </div>
    </div>
  );
}

export default PokemonInfoBlock;
