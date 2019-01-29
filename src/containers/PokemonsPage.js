import React, { Component } from 'react';

// import { Link } from 'react-router-dom'
import { getPokemons } from '../API';
import Capitalize from '../tools/Capitalize'

class PokemonsPage extends Component {
  state = { 
    pokemons: null
   }

  componentDidMount = async () => {
    try{
      const data = await getPokemons();
      this.setState({pokemons: data.results})
      console.log(data.results)
      console.log(data.results[0].url)
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
          {pokemons.map( pokemon => (
            <div key={pokemon.name}> 
              {Capitalize(pokemon.name)}
              {/* {console.log(pokemon.url)} */}
            </div>
          ))}
        </div>
      :
        <div>No Pokemons..</div>
     );
  }
}
 
export default PokemonsPage;