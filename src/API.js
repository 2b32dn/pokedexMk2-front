const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=9/"
const API2_URL = "https://pokeapi.co/api/v2/pokemon/"
const API3_URL = "https://pokeapi.co/api/v2/pokemon-species/"

export async function getPokemons () {
  const pokeData = await fetch(API_URL)
  return pokeData.json()
}

export async function getPokemon (id) {
  const pokeData = await fetch(`${API2_URL}${id}/`)
  return pokeData.json()
}

export async function getPokemonExtra (id){
  const pokeData = await fetch(`${API3_URL}${id}/`)
  return pokeData.json()
}