const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=20/"

export async function getPokemons () {
  const pokeData = await fetch(API_URL)
  return pokeData.json()
}
