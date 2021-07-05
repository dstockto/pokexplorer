import * as React from "react";
import {fireEvent, render} from "@testing-library/react";

describe('tests for onchange effect', () => {
  it('changes the values via the fireEvent.change method', () => {
    const handleChange = jest.fn();
    const {container} = render(<input type='text' onChange={handleChange}/>);
    const input = container.firstChild as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'a'}});
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe('a');
  });

  it('must use fireEvent.change for select drop-downs', () => {
    const handleChange = jest.fn();
    const {container} = render(
      <select onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
    );
    const select = container.firstChild as HTMLSelectElement;
    const option1 = container.getElementsByTagName('option').item(0)!;
    const option2 = container.getElementsByTagName('option').item(1)!;

    fireEvent.change(select, {target: {value: '2'}});
    expect(option1.selected).toBe(false);
    expect(option2.selected).toBe(true);
  });

  it('uses fireEvent.click for checkboxes and radios', () => {
    const handleChange = jest.fn();
    const {container} = render(
      <input type={'checkbox'} onChange={handleChange}/>
    );
    const checkbox = container.firstChild as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox.checked).toBe(true);
  });
});
