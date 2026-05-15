import PokemonCard from './PokemonCard'
import { useState } from 'react'

const POKEMONS = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Elétrico',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grama / Veneno',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
]

function PokemonList() {

  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <section>
      <label htmlFor="busca">Buscar por nome: </label>
      <input
        id="busca"
        type="search"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Ex.: char"
      />
      
    <p>
        Mostrando {listaFiltrada.length} Pokémon(s)
    </p>

    {listaFiltrada.length === 0 ? (
        <p>Nenhum Pokémon encontrado!</p>
    ) : (
        listaFiltrada.map((pokemon) => (
        <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            imageUrl={pokemon.imageUrl}
        />
        ))
    )}

    </section>
    )
}

export default PokemonList