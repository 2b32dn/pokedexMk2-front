import React, { Component } from 'react';

import { fetchPokemonData, fetchPokemonExtraData, fetchPokemonsURL, fetchPokemonTypes } from '../API';

import PokemonsList from './PokemonsList';

import Modal from '../components/modal/Modal';
import Backdrop from '../components/modal/Backdrop';
// import LeftButton from '../components/buttons/LeftButton';
// import RightButton from '../components/buttons/RightButton';

class PokemonsPage extends Component {
	state = {
		pokemons: null,
		pokemon: null,
		pokemonExtra: null,
		pokemonTypes: null,
		modalOpen: false
	};

	openModal = () => {
		this.setState((e) => {
			return {
				modalOpen: !e.modalOpen
			};
		});
	};

	closeModal = () => {
		this.setState({ modalOpen: false });
	};

	targetPokemon = async (id) => {
		try {
			const targetPokemonData = await fetchPokemonData(id);
			this.setState({ pokemon: targetPokemonData });
		} catch (err) {
			console.log(err);
		}
	};
	targetPokemonExtra = async (id) => {
		try {
			const targetPokemonData = await fetchPokemonExtraData(id);
			this.setState({ pokemonExtra: targetPokemonData });
		} catch (err) {
			console.log(err);
		}
	};

	componentDidMount = async () => {
		try {
			// Fetch pokemonsURL
			const pokemons = await fetchPokemonsURL();
			// console.log(pokemons)
			const pokemonData = await Promise.all(
				pokemons.results.map(async (result) => {
					const pokemon = await fetch(result.url);
					return pokemon.json();
				})
			);
			this.setState({ pokemons: pokemonData });

			const pokemonsTypes = await fetchPokemonTypes();
			this.setState({ pokemonTypes: pokemonsTypes.results });
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		const { pokemons, pokemon, pokemonExtra, pokemonTypes } = this.state;
		// console.log('pokemons', pokemons)
		// console.log("pokemon", pokemon)
		// console.log("pokemonExtra", pokemonExtra)
		// console.log(nextPokemons)
		console.log(pokemonTypes);

		let backDrop;
		if (this.state.modalOpen) {
			backDrop = <Backdrop closeModal={this.closeModal} />;
		}
		return pokemons ? (
			<div className="pokemons-page">
				<PokemonsList
					pokemons={pokemons}
					show={this.openModal}
					targetPokemon={this.targetPokemon}
					pokemonExtra={this.targetPokemonExtra}
				/>
				<Modal
					pokemons={pokemons}
					pokemon={pokemon}
					pokemonExtra={pokemonExtra}
					show={this.state.modalOpen}
					pkmnTypes={this.state.pokemonTypes}
				/>
				<div>{backDrop}</div>
			</div>
		) : (
				<div>Loading Pokemons...</div>
			);
	}
}

export default PokemonsPage;
