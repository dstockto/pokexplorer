import * as React from "react";
import {render, screen} from "@testing-library/react";
import PokemonInfoBlock from "./PokemonInfoBlock";
import {GeneraLink} from "../interface/links";
import Ability from "../interface/Ability";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();
function wrap(stuff: JSX.Element) {
  return <QueryClientProvider client={queryClient}>{stuff}</QueryClientProvider>;
}

describe('displays information about the pokemon', () => {
  it('displays standard pokemon info', () => {
    const genera: GeneraLink[] = [{
      genus: 'Hamster Pokémon',
      language: {
        url: '/en',
        name: 'en',
      }
    }];
    const abilities: Ability[] = [{is_hidden: false, slot: 1, ability: {name: 'smash', url: '/smash'}}];
    render(wrap(<PokemonInfoBlock height={10} category={genera} weight={20} abilities={abilities} genderRate={1}/>));
    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('3\' 4"')).toBeInTheDocument();
    expect(screen.getByText('Weight')).toBeInTheDocument();
    expect(screen.getByText('4 lbs 7 oz')).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText('Male / Female')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Hamster')).toBeInTheDocument();
    expect(screen.getByText('Abilities')).toBeInTheDocument();
    expect(screen.getByText('Smash')).toBeInTheDocument();
  });

  it('displays genderless for genderless pokemon', () => {
    const genera: GeneraLink[] = [{
      genus: 'Trash Bag Pokémon',
      language: {
        url: '/en',
        name: 'en',
      }
    }];
    const abilities: Ability[] = [{is_hidden: false, slot: 1, ability: {name: 'Stench', url: '/stench'}}];
    render(wrap(<PokemonInfoBlock height={6} category={genera} weight={310} abilities={abilities} genderRate={-1}/>));
    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('2\' 0"')).toBeInTheDocument();
    expect(screen.getByText('Weight')).toBeInTheDocument();
    expect(screen.getByText('68 lbs 6 oz')).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText('Genderless')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Trash Bag')).toBeInTheDocument();
    expect(screen.getByText('Abilities')).toBeInTheDocument();
    expect(screen.getByText('Stench')).toBeInTheDocument();
  });

  it('shows hidden abilities differently', () => {
    const genera: GeneraLink[] = [{
      genus: 'Hamster Pokémon',
      language: {
        url: '/en',
        name: 'en',
      }
    }];
    const abilities: Ability[] = [
      {is_hidden: false, slot: 1, ability: {name: 'smash', url: '/smash'}},
      {is_hidden: true, slot: 2, ability: {name: 'aftermath', url: '/aftermath'}}
    ];
    render(wrap(<PokemonInfoBlock height={10} category={genera} weight={20} abilities={abilities} genderRate={1}/>));

    const aftermath = screen.getByText('Aftermath');
    expect(aftermath).toHaveClass('hidden-ability');
  });
});
