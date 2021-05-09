import * as React from "react";
import PokemonSpecies from "../interface/PokemonSpecies";
import {PokemonLink} from "../interface/links";
import {Button, Dropdown, Menu} from "antd";
import {titleCase} from "title-case";
import {DownOutlined} from '@ant-design/icons';
import "../style/alternate-forms.css";

interface AlternateFormsProps {
  species: PokemonSpecies,
  setPokemon: (pokemon: PokemonLink) => void
}

function AlternateForms({species, setPokemon}: AlternateFormsProps) {
  if (species.varieties.length === 1) {
    return null;
  }

  const pokemonVarieties = species.varieties.map(variety => variety.pokemon);
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
