const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=802/" /* 802 */
const API2_URL = "https://pokeapi.co/api/v2/pokemon/"
const API3_URL = "https://pokeapi.co/api/v2/pokemon-species/"
const API4_URL = "https://pokeapi.co/api/v2/type/"

export async function fetchPokemonsURL () {
  const pokeData = await fetch(API_URL)
  return pokeData.json()
}

export async function fetchNextPreviousPokemonsURL (api) {
  const pokeData = await fetch(api)
  return pokeData.json()
}

export async function fetchPokemonData (id) {
  const pokeData = await fetch(`${API2_URL}${id}/`)
  return pokeData.json()
}

export async function fetchPokemonExtraData (id){
  const pokeData = await fetch(`${API3_URL}${id}/`)
  return pokeData.json()
}

export async function fetchPokemonTypes () {
  const pokeData = await fetch(API4_URL)
  return pokeData.json()
}