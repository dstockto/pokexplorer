import * as React from "react";
import { render, screen } from "@testing-library/react";
import BlockBar from "./BlockBar";

describe("It renders block bars correctly", () => {
  it("renders the label", () => {
    render(<BlockBar name={"Attack"} value={12} />);

    const label = screen.getByText("Attack");

    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("label");
  });

  it("renders 15 blocks total", () => {
    render(<BlockBar name={"Special Defense"} value={0} />);
    const emptyDivs = screen.getAllByTestId("empty");

    expect(emptyDivs.length).toBe(15);

    emptyDivs.forEach((div) => {
      expect(div).toHaveClass("block");
      expect(div).toHaveClass("empty");
    });
  });

  it("renders filled blocks based on value", () => {
    render(<BlockBar name={"Defense"} value={13} />);
    const filledDivs = screen.getAllByTestId("filled");
    const emptyDivs = screen.getAllByTestId("empty");

    expect(filledDivs.length).toBe(13);
    expect(emptyDivs.length).toBe(2);
    filledDivs.forEach((filled) => {
      expect(filled).toHaveClass("block");
      expect(filled).toHaveClass("filled");
    });

    emptyDivs.forEach((empty) => {
      expect(empty).toHaveClass("block");
      expect(empty).toHaveClass("empty");
    });
  });

  it("renders nothing if value is not provided", () => {
    render(<BlockBar name={"Something"} value={undefined} />);

    expect(screen.queryAllByTestId("empty").length).toBe(0);
    expect(screen.queryAllByTestId("filled").length).toBe(0);
  });
});
