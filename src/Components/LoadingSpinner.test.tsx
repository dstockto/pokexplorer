import * as React from "react";
import {render} from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe('It will render the LoadingSpinner correctly', () => {
  it('will render', () => {
    const {container} = render(<LoadingSpinner/>);
    expect(container.getElementsByTagName('svg').length).toBe(1);
  });
});
