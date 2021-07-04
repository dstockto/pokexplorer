import * as React from "react";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import TestHooks from "./TestHooks";

describe("it will work and do all the stuff the tests say it should", () => {
  it("App loads with initial state of 0", () => {
    const { container } = render(<TestHooks />);
    const countValue = getByTestId(container, "countvalue");
    expect(countValue.textContent).toBe("0");
  });

  it("Increment and decrement buttons work", () => {
    const { container } = render(<TestHooks />);
    const countValue = getByTestId(container, "countvalue");
    const increment = getByTestId(container, "incrementButton");
    const decrement = getByTestId(container, "decrementButton");
    expect(countValue.textContent).toBe("0");
    fireEvent.click(increment);
    expect(countValue.textContent).toBe("1");
    fireEvent.click(decrement);
    expect(countValue.textContent).toBe("0");
  });

  it("Submitting a name via the input field changes the name state value", () => {
    const { container, rerender } = render(<TestHooks />);
    const nameValue = getByTestId(container, "namevalue");
    const inputName = getByTestId(container, "inputName");
    const submitButton = getByTestId(container, "submitRefButton");
    const newName = "Ben";
    fireEvent.change(inputName, { target: { value: newName } });
    fireEvent.click(submitButton);
    expect(nameValue.textContent).toEqual(newName);
    rerender(<TestHooks />);
    expect(window.localStorage.getItem("name")).toBe(newName);
  });

  it("renders a name from local storage if it is in there", () => {
    window.localStorage.setItem("name", "Bobo");

    const { container } = render(<TestHooks />);
    const nameValue = getByTestId(container, "namevalue");

    expect(nameValue.textContent).toEqual("Bobo");
  });
});
