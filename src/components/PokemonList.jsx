import { useState } from 'react'
import PokemonCard from './PokemonCard'

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
  {
    id: 4,
    name: 'Charmander',
    type: 'Fogo',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
]

function PokemonList() {
  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <section
      className="pokemon-catalog"
      id="catalogo"
      aria-labelledby="catalogo-titulo"
    >
      <div className="pokemon-catalog__head">
        <h2 id="catalogo-titulo" className="pokemon-catalog__title">
          Catálogo
        </h2>
        <div className="pokemon-toolbar">
          <label htmlFor="busca">Buscar por nome</label>
          <input
            id="busca"
            className="pokemon-search"
            type="search"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Ex.: char"
            autoComplete="off"
          />
        </div>
      </div>

      {listaFiltrada.length === 0 ? (
        <p className="pokemon-catalog__empty">
          Nenhum Pokémon encontrado. Tente outro nome na busca.
        </p>
      ) : (
        <div className="pokemon-grid">
          {listaFiltrada.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              imageUrl={pokemon.imageUrl}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default PokemonList