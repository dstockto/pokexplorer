import * as React from "react";
import AlternateForms from "./AlternateForms";
import {fireEvent, render, screen} from "@testing-library/react";
import PokemonSpeciesVariety from "../interface/PokemonSpeciesVariety";

describe('the AlternateForms component works', () => {
  it('will not render anything if species has only its own variety', () => {
    const varieties: PokemonSpeciesVariety[] = [{is_default: true, pokemon: {url: '/p1', name: 'pikachu'}}];
    render(<AlternateForms varieties={varieties} setPokemon={() => {}}/>);

    expect(screen.queryAllByText('Variations').length).toEqual(0);
  });

  it('will render a menu with alternate forms', async () => {
    const varieties: PokemonSpeciesVariety[] = [
      {
        is_default: true,
        pokemon: {url: 'https://pokeapi.co/api/v2/pokemon/3/', name: 'venusaur'}
      },
      {
        is_default: false,
        pokemon: {url: 'https://pokeapi.co/api/v2/pokemon/10033/', name: 'venusaur-mega'}
      },
      {
        is_default: false,
        pokemon: {url: 'https://pokeapi.co/api/v2/pokemon/10033/', name: 'venusaur-gmax'}
      }
    ];

    render(<AlternateForms varieties={varieties} setPokemon={() => {
    }}/>);

    const variationsButton = screen.getByText('Variations');
    expect(variationsButton).toBeInTheDocument();

    fireEvent.mouseOver(variationsButton);

    await screen.findByText('Venusaur');

    expect(screen.getByText('Venusaur')).toBeInTheDocument();
    expect(screen.getByText('Venusaur Mega')).toBeInTheDocument();
    expect(screen.getByText('Venusaur Gmax')).toBeInTheDocument();
  });

  it('will set a pokemon based on clicking a variation', async () => {
    const varieties: PokemonSpeciesVariety[] = [
      {
        is_default: true,
        pokemon: {url: 'https://pokeapi.co/api/v2/pokemon/3/', name: 'venusaur'}
      },
      {
        is_default: false,
        pokemon: {url: 'https://pokeapi.co/api/v2/pokemon/10033/', name: 'venusaur-mega'}
      },
      {
        is_default: false,
        pokemon: {url: 'https://pokeapi.co/api/v2/pokemon/10033/', name: 'venusaur-gmax'}
      }
    ];

    const setPokemon = jest.fn(() => {});
    render(<AlternateForms varieties={varieties} setPokemon={setPokemon}/>);

    const variationsButton = screen.getByText('Variations');
    expect(variationsButton).toBeInTheDocument();

    fireEvent.mouseOver(variationsButton);

    await screen.findByText('Venusaur');

    const venusaur = screen.getByText('Venusaur');
    fireEvent.click(venusaur);
    expect(setPokemon).toBeCalledWith(varieties[0].pokemon);

    const venusaurMega = screen.getByText('Venusaur Mega');
    fireEvent.click(venusaurMega);
    expect(setPokemon).toBeCalledWith(varieties[1].pokemon);

    const venusaurGmax = screen.getByText('Venusaur Gmax');
    fireEvent.click(venusaurGmax);
    expect(setPokemon).toBeCalledWith(varieties[2].pokemon);
  });
});
