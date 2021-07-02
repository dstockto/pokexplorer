import * as React from "react";
import {PokemonLink} from "../interface/links";
import {Button, Dropdown, Menu} from "antd";
import {titleCase} from "title-case";
import {DownOutlined} from '@ant-design/icons';
import "../style/alternate-forms.css";
import PokemonSpeciesVariety from "../interface/PokemonSpeciesVariety";

interface AlternateFormsProps {
  varieties: PokemonSpeciesVariety[],
  setPokemon: (pokemon: PokemonLink) => void
}

function AlternateForms({varieties, setPokemon}: AlternateFormsProps) {
  if (varieties.length === 1) {
    return null;
  }

  const pokemonVarieties = varieties.map(variety => variety.pokemon);
  const menu = (
    <Menu>
      {pokemonVarieties.map(variety => (
        <Menu.Item key={variety.name}>
          <Button
            type={'text'}
            onClick={() => setPokemon(variety)}>{titleCase(variety.name.replace('-', ' '))}
          </Button>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={'alternate-forms-dropdown'}>
      <Dropdown overlay={menu}>
        <Button
          onClick={e => e.preventDefault()}
          type={"default"}
        >
          Variations <DownOutlined/>
        </Button>
      </Dropdown>
    </div>
  )
}

export default AlternateForms;
