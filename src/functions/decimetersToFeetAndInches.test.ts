import { decimetersToFeetAndInches } from "./index";

describe("decimetersToFeetAndInches works correctly", () => {
  it("correctly says a bulbasaur is 2ft 4in", () => {
    expect(decimetersToFeetAndInches(7)).toEqual("2' 4\"");
  });

  it("converts mewtwo height to 6ft 7in", () => {
    expect(decimetersToFeetAndInches(20)).toEqual("6' 7\"");
  });

  it("converts eternatus height correctly", () => {
    expect(decimetersToFeetAndInches(200)).toEqual("65' 8\"");
  });

  it("converts trubbish height to 2ft 0in", () => {
    expect(decimetersToFeetAndInches(6)).toEqual("2' 0\"");
  });
});
