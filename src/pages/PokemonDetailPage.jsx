import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPokemonById } from '../services/pokemonApi'

function PokemonDetailPage() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)  // null, nao []
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadPokemon() {
      try {
        setLoading(true)
        setError(null)
        setPokemon(null)         // limpa antes de buscar novo id
        const data = await fetchPokemonById(id)
        if (!cancelled) setPokemon(data)
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Erro ao carregar.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadPokemon()
    return () => { cancelled = true }
  }, [id])  // <- roda de novo se o id mudar


  if (loading) return <p>Carregando Pokémon...</p>
  if (error) return <p role="alert">{error}</p>
  if (!pokemon) return (
    <>
      <p>Pokémon "{id}" não encontrado na API.</p>
      <Link to="/pokemon">Voltar ao catálogo</Link>
    </>
  )
  // ... renderiza os dados normalmente


  return (
    <section className="pokemon-detail" aria-labelledby="detalhe-titulo">
      <Link to="/pokemon" className="pokemon-detail__back">
        ← Voltar ao catálogo
      </Link>

      <article className="pokemon-detail__card">
        <div className="pokemon-detail__media">
          <img src={pokemon.imageUrl} alt={pokemon.name} width={160} height={160} />
        </div>
        <div className="pokemon-detail__body">
          <h2 id="detalhe-titulo">
            #{String(pokemon.id).padStart(3, '0')} — {pokemon.name}
          </h2>
          <p className="pokemon-detail__type">
            Tipo: <span>{pokemon.type}</span>
          </p>
          <p className="pokemon-detail__desc">{pokemon.description}</p>
        </div>
      </article>
    </section>
  )
}

export default PokemonDetailPage