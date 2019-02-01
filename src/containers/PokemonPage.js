import React, { Component } from 'react'
import {getPokemon} from '../API'

class PokemonPage extends Component {
  state = {
    pokemon: null
  }
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const { pokemon } = await getPokemon(id);
    console.log(pokemon)
  }
  render() {
    console.log(this.props)
    const { pokemon } = this.state;
    return (
      (pokemon)
      ?
        <div>hi</div>
      :  
        <div>Loading</div>
    )
  }
}

export default PokemonPage
