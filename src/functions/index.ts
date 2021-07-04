import { titleCase } from "title-case";
import { GeneraLink } from "../interface/links";

export function pokemonName(name: string) {
  return titleCase(name.replace("-", " "));
}

export function decimetersToFeetAndInches(height: number) {
  const inches = Math.ceil(height * 3.9370079);
  const feet = Math.floor(inches / 12);
  const remainder = inches - feet * 12;
  return `${feet}' ${Math.ceil(remainder)}"`;
}

export function hectogramsToPounds(weight: number) {
  const ounces = Math.ceil(weight * 3.5273962);
  const pounds = Math.floor(ounces / 16);
  const remainder = Math.ceil(ounces - pounds * 16);
  return `${pounds} lbs ${remainder} oz`;
}

export function genderRateToIcons(genderRate: number) {
  if (genderRate === -1) {
    return "Genderless";
  }
  return "Male / Female";
}

export function generaToCategory(category: GeneraLink[]) {
  const genera = category.filter((link) => link.language.name === "en");
  if (genera.length === 0) {
    return "Unknown Category";
  }
  return genera[0].genus.replace(" Pokémon", "");
}
