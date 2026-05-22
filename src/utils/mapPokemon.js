// src/utils/mapPokemon.js

export function mapPokemonFromApi(apiData) {
  const TYPE_LABELS = {
    grass: 'Grama', poison: 'Veneno', fire: 'Fogo',
    water: 'Água',  electric: 'Elétrico', flying: 'Voador',
    normal: 'Normal',
  }
  const capitalize = n => n.charAt(0).toUpperCase() + n.slice(1)

  const types = apiData.types.map(e => e.type.name)
  const type  = types
    .map(s => TYPE_LABELS[s] ?? capitalize(s))
    .join(' / ')

  const imageUrl =
    apiData.sprites.other?.['official-artwork']?.front_default ??
    apiData.sprites.front_default

  return {
        id: apiData.id,
    name: capitalize(apiData.name),
    type,
    imageUrl,
    description: '', // preenchido depois em fetchPokemonById
  }
}

export function mapDescriptionFromSpecies(speciesData) {
  const entry =
    speciesData.flavor_text_entries.find(e => e.language.name === 'pt') ??
    speciesData.flavor_text_entries.find(e => e.language.name === 'en')
  if (!entry) return ''
  return entry.flavor_text.replace(/\f|\n/g, ' ').trim()
}

