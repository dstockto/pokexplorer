import * as React from "react";
import {render, screen} from "@testing-library/react";
import Checkbox from "./Checkbox";
import userEvent from "@testing-library/user-event";

describe('handles click correctly', () => {
  it('does a click', () => {
    render(<Checkbox/>);

    userEvent.click(screen.getByText('Check'));
    expect(screen.getByLabelText('Check')).toBeChecked();
  });
});
