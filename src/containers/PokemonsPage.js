import React, { Component } from 'react';

import { fetchPokemonData, fetchPokemonExtraData, fetchPokemonsURL, fetchNextPreviousPokemonsURL} from '../API';
import PokemonsList from './PokemonsList';

import Modal from '../components/modal/Modal';
import Backdrop from '../components/modal/Backdrop';
import LeftButton from '../components/buttons/LeftButton';
import RightButton from '../components/buttons/RightButton';

class PokemonsPage extends Component {
	state = {
		pokemons: null,
		pokemon: null,
		pokemonExtra: null,
		nextPokemons: null,
		previousPokemons: null,
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

	nextPokemonList = () => {
		console.log(this.state.nextPokemons)
		this.setState( (e) => {
			return {pokemon: e.nextPokemons}
		})
		console.log(this.state.pokemon)
	}

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
			
			// Fetch next list of pokemonsURL

			const pokemonsNext = await fetchNextPreviousPokemonsURL(pokemons.next)
			// console.log(pokemonsNext)
			const pokemonNextData = await Promise.all(
				pokemonsNext.results.map(async (result) => {
					const pokemon = await fetch(result.url);
					return pokemon.json();
				})
			);
			this.setState({ nextPokemons: pokemonNextData });

			// Fetch previous list of PokemonsURL

			const pokemonsPrevious = await fetchNextPreviousPokemonsURL(pokemonsNext.previous)
			// console.log(pokemonsPrevious)
			const pokemonPreviousData = await Promise.all(
				pokemonsPrevious.results.map(async (result) => {
					const pokemon = await fetch(result.url);
					return pokemon.json();
				})
			);
			this.setState({ previousPokemons: pokemonPreviousData });

		} catch (err) {
			console.log(err);
		}
	};

	render() {
		const { pokemons, pokemon, pokemonExtra, nextPokemons } = this.state;
		// console.log('pokemons', pokemons)
		// console.log("pokemon", pokemon)
		// console.log("pokemonExtra", pokemonExtra)
		console.log(nextPokemons)
		let backDrop;
		if (this.state.modalOpen) {
			backDrop = <Backdrop closeModal={this.closeModal} />;
		}
		return pokemons ? (
			<div>
				<LeftButton />
				<PokemonsList
					pokemons={pokemons}
					show={this.openModal}
					targetPokemon={this.targetPokemon}
					pokemonExtra={this.targetPokemonExtra}
				/>
				<Modal pokemons={pokemons} pokemon={pokemon} pokemonExtra={pokemonExtra} show={this.state.modalOpen} />
				<RightButton pokemonNext={this.nextPokemonList}/>
				{backDrop}
			</div>
		) : (
			<div>Loading Pokemons...</div>
		);
	}
}

export default PokemonsPage;
