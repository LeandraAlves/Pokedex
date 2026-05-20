import { Link, useParams } from 'react-router-dom'
import { getPokemonById } from '../data/pokemons'

function PokemonDetailPage() {
  const { id } = useParams()
  const pokemon = getPokemonById(id)

  if (!pokemon) {
    return (
      <section className="pokemon-detail pokemon-detail--empty">
        <h2>Pokémon não encontrado</h2>
        <p>Não existe um Pokémon com o id &quot;{id}&quot; neste catálogo.</p>
        <Link to="/pokemon" className="pokemon-detail__back">
          Voltar ao catálogo
        </Link>
      </section>
    )
  }

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