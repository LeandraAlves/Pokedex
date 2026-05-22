import PokemonCard from './PokemonCard'
import { useState, useEffect } from 'react'

import { fetchPokemonList } from '../services/pokemonApi'

function PokemonList() {

  const [filtro, setFiltro] = useState('')

  const [pokemons, setPokemons] = useState([])  // comeca vazio
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const listaFiltrada = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  )

  useEffect(() => {
    let cancelled = false

    async function loadPokemons() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchPokemonList(20)
        if (!cancelled) setPokemons(data)
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Erro ao carregar.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadPokemons()
    return () => { cancelled = true }
  }, [])   // <- [] = roda só na montagem

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

      {loading && <p>Carregando Pokémon...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && listaFiltrada.length === 0 && (
        <p>Nenhum Pokémon encontrado.</p>
      )}
      {!loading && !error && listaFiltrada.length > 0 && (
        <div className="pokemon-grid">
          {listaFiltrada.map(pokemon => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      )}


    </section>
  )
}

export default PokemonList