import * as React from "react";
import SearchBox from "./SearchBox";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SearchBox works as expected", () => {
  it("will be empty to start", () => {
    render(<SearchBox applyFilter={() => {}} />);
    expect(screen.getByTestId("filter")).toHaveValue("");
  });

  it("will have a value when someone types", () => {
    render(<SearchBox applyFilter={() => {}} />);

    const input = screen.getByTestId("filter");
    fireEvent.change(input, { target: { value: "charizard" } });
    expect(input).toHaveValue("charizard");
  });

  it("will call the applyFilter function with the value of the input", () => {
    const applyFilter = jest.fn(() => {});
    render(<SearchBox applyFilter={applyFilter} />);

    const input = screen.getByTestId("filter");
    fireEvent.change(input, { target: { value: "pikachu" } });
    expect(input).toHaveValue("pikachu");
    expect(applyFilter).toBeCalledWith("pikachu");

    fireEvent.change(input, { target: { value: "aegis-shield" } });
    expect(input).toHaveValue("aegis-shield");
    expect(applyFilter).toBeCalledWith("aegis-shield");
  });
});
