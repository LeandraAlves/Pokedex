import PokemonCard from './PokemonCard'
import { useState } from 'react'
import { POKEMONS } from '../data/pokemons'


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
        <p>Nenhum Pokémon encontrado, tente outro nome!</p>
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