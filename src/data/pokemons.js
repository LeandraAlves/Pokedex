export const POKEMONS = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Elétrico',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    description:
      'Quando vários destes Pokémon se juntam, sua eletricidade pode causar tempestades de raios.',
  },
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grama / Veneno',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    description:
      'Um Pokémon amigável que carrega uma semente nas costas desde o nascimento.',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fogo',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    description:
      'A chama na ponta da cauda indica sua saúde e emoções.',
  },
]

export function getPokemonById(id) {
  const numericId = Number(id)
  return POKEMONS.find((p) => p.id === numericId) ?? null
}