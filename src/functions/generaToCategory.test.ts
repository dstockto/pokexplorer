import {generaToCategory} from "./index";

describe('generaToCategory finds the correct pokemon type', () => {
  it('will return unknown category if nothing is provided', () => {
    expect(generaToCategory([])).toEqual('Unknown Category');
  });

  it('will return unknown category if no english type is provided', () => {
    const genera = [
      {
        language: {
          name: 'es',
          url: '/es'
        },
        genus: 'el whatever'
      },
      {
        language: {
          name: 'fr',
          url: '/fr',
        },
        genus: 'la whatever'
      }
    ];

    expect(generaToCategory(genera)).toEqual('Unknown Category');
  });

  it('will return the pokemon category in english', () => {
    const genera = [
      {
        "genus": "キョダイポケモン",
        "language": {
          "name": "ja-Hrkt",
          "url": "https://pokeapi.co/api/v2/language/1/"
        }
      },
      {
        "genus": "거대포켓몬",
        "language": {
          "name": "ko",
          "url": "https://pokeapi.co/api/v2/language/3/"
        }
      },
      {
        "genus": "超極巨寶可夢",
        "language": {
          "name": "zh-Hant",
          "url": "https://pokeapi.co/api/v2/language/4/"
        }
      },
      {
        "genus": "Pokémon Giga",
        "language": {
          "name": "fr",
          "url": "https://pokeapi.co/api/v2/language/5/"
        }
      },
      {
        "genus": "Gigant",
        "language": {
          "name": "de",
          "url": "https://pokeapi.co/api/v2/language/6/"
        }
      },
      {
        "genus": "Pokémon Gigantesco",
        "language": {
          "name": "es",
          "url": "https://pokeapi.co/api/v2/language/7/"
        }
      },
      {
        "genus": "Pokémon Gigante",
        "language": {
          "name": "it",
          "url": "https://pokeapi.co/api/v2/language/8/"
        }
      },
      {
        "genus": "Gigantic Pokémon",
        "language": {
          "name": "en",
          "url": "https://pokeapi.co/api/v2/language/9/"
        }
      },
      {
        "genus": "キョダイポケモン",
        "language": {
          "name": "ja",
          "url": "https://pokeapi.co/api/v2/language/11/"
        }
      },
      {
        "genus": "超极巨宝可梦",
        "language": {
          "name": "zh-Hans",
          "url": "https://pokeapi.co/api/v2/language/12/"
        }
      }
    ];

    expect(generaToCategory(genera)).toEqual('Gigantic');
  });
});

