import React, { Component } from 'react';

// import { Link } from 'react-router-dom'
import { getPokemons } from '../API';
import Capitalize from '../tools/Capitalize'

class PokemonsPage extends Component {
  state = { 
    pokemons: null
   }

  getPokemon = async (url) => {
    const pokemonData = await fetch(url)
    const pokemonJSON = await pokemonData.json()
    return  this.setState({pokemons: pokemonJSON})
  }

  componentDidMount = async () => {
    try{
      const pokemonsData = await Promise.all([getPokemons()]);
      pokemonsData[0].results.map( item => this.getPokemon(item.url))
    } catch (err) {
      console.log(err)
    }
  }
  
  render() { 
    const { pokemons } = this.state;
    console.log(pokemons)
    return ( 
      ( pokemons ) 
      ? 
        <div> 
          
        </div>
      :
        <div>No Pokemons..</div>
     );
  }
}
 
export default PokemonsPage;