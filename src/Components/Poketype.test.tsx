import * as React from "react";
import {render, screen} from "@testing-library/react";
import Poketype from "./Poketype";

describe('The PokemonTypes component works', () => {
  it('renders the ice type', () => {
    render(<Poketype type={'ice'}/>);

    const iceComponent = screen.getByText('ice');
    expect(iceComponent).toBeInTheDocument();
    expect(iceComponent).toHaveClass('poketype');
    expect(iceComponent).toHaveClass('type-ice');
  });
});
