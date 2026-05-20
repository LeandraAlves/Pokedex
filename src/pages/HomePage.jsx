function HomePage() {
  return (
    <section className="page-home" aria-labelledby="home-titulo">
      <div className="app-about__card">
        <h2 id="home-titulo">Bem-vindo à Pokédex</h2>
        <p>
          Explore o catálogo de Pokémon, use a busca por nome e clique em um card
          para ver os detalhes. Use o menu acima para navegar entre Início,
          Pokémon e Sobre.
        </p>
      </div>
    </section>
  )
}

export default HomePage