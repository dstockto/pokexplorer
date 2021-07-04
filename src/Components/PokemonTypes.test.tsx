import * as React from "react";
import {render, screen} from "@testing-library/react";
import PokemonTypes from "./PokemonTypes";
import Type from "../interface/Type";

describe('The PokemonTypes component works', function () {
  it('displays a set of types', () => {
    const types: Type[] = [
      {type: {name: 'fire', url: '/fire'}, slot: 1},
      {type: {name: 'rock', url: '/rock'}, slot: 2},
      {type: {name: 'steel', url: '/steel'}, slot: 3},
    ];
    render(<PokemonTypes types={types}/>);

    expect(screen.getByText('Types')).toBeInTheDocument();
    expect(screen.getByText('fire')).toBeInTheDocument();
    expect(screen.getByText('rock')).toBeInTheDocument();
    expect(screen.getByText('steel')).toBeInTheDocument();
  });
});
