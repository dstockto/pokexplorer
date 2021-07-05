import * as React from "react";
import Welcome from "./Welcome";
import {act, fireEvent, render, screen} from "@testing-library/react";

describe('The Welcome component works correctly', () => {
  it('has the correct welcome text', () => {
    render(<Welcome firstName={'John'} lastName={'Doe'}/>);
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe');
  });

  it('has correct input values', () => {
    render(<Welcome firstName={'John'} lastName={'Doe'}/>);
    expect(screen.getByRole('form')).toHaveFormValues(
      {
        firstName: 'John',
        lastName: 'Doe',
      }
    );
  });

  it('updates based on typing stuff into the forms', () => {
    render(<Welcome firstName={'John'} lastName={'Doe'}/>);
    const firstName = screen.getByLabelText('First Name');
    act(() => {
      fireEvent.change(firstName, {target: {value: 'Bob'}});
    });
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome, Bob Doe');
    expect(firstName).toHaveValue('Bob');

    const lastName = screen.getByLabelText('Last Name');
    act(() => {
      fireEvent.change(lastName, {target: {value: 'Dillon'}});
    });
    expect(lastName).toHaveValue('Dillon');
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome, Bob Dillon');
  });
});

