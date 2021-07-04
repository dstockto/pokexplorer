import { pokemonName } from "./index";

describe("Pokemon name function normalizes pokemon names correctly", () => {
  it("Will capitalize names", () => {
    expect(pokemonName("pikachu")).toBe("Pikachu");
  });

  it("will convert dashes to spaces", () => {
    expect(pokemonName("aegis-slash")).toBe("Aegis Slash");
  });
});
