import React from 'react';
import Capitalize from '../../tools/Capitalize'

import StatusBar from '../modal/StatusBar'
import Image from '../modal/Image'
import NaturalMoves from './NaturalMoves';
import TutorMoves from './TutorMoves';
import MachineMoves from './MachineMoves';

const Modal = ({ show, pokemon, pokemonExtra, pkmnTypes }) => {

	let modalClasses = 'modal-hidden';
	if (show) {
		modalClasses = 'modal';
	}
	console.log(pokemon)
	console.log(pokemonExtra)

	if (!pokemon || !pokemonExtra || !pkmnTypes) {
		return <div className={modalClasses}></div>
	}

	const pokemonFlavorEntry = pokemonExtra.flavor_text_entries.filter( entry => {
		return (entry.version.name === "omega-ruby" || entry.version.name === "ultra-sun") && entry.language.name === "en" 
	})[0].flavor_text

	return (
		<div className={modalClasses} >
			{/* {types.push(pkmnTypes.map( (type)=> type.name))} */}
			<div className="modal-pokemon-name">
				{Capitalize(pokemon.species.name)}
			</div>

			<div className="modal-img-stats">
				<Image img={pokemon.sprites.front_default} name={pokemon.name} type={pokemon.types.map(type => type.type.name)}/>
				<div className="modal-stats">
					{pokemon.stats.reverse().map((stat) => (
						<ul key={stat.stat.name} className="modal-stats-name">
							<li>
								{Capitalize(stat.stat.name).replace(/-/g, ' ')} 
							</li>
						</ul>
					))}
				</div>
				<div className="modal-stats">
					{pokemon.stats.reverse().map((stat) => (
						<ul key={stat.stat.name}>
							<StatusBar stat={stat.base_stat} type={pokemon.types.map(type => type.type.name)}/>
						</ul>
					))}
				</div>
				<div className="modal-types">
					{pokemon.types.map((type) => 
						<div key={type.type.name} className={`${type.type.name}-type`}>
							{Capitalize(type.type.name)}
						</div>
					)}
				</div>
			</div>
			<div className="modal-characteristics-title">Characteristics</div>
			<div className="modal-characteristics">
				{pokemonExtra.genera.map( genus => (genus.language.name === 'en') ? <div key={genus.genus} className="modal-genus">{genus.genus.replace(/é/g, 'e')}</div> : null)}
				<div className="modal-flavor">
					{pokemonFlavorEntry}
				</div>
				<div>
					<div className="modal-egg-group">
						Egg Group: 
					</div>
					{pokemonExtra.egg_groups.map(group => <li key={group.name} className="modal-egg-name">{Capitalize(group.name)}</li>)}
				</div>
				<div>
					<div className="modal-abilities">Abilities:</div> 
					{pokemon.abilities.map((ability) => 
						(ability.is_hidden)
						? 
							<div key={ability.ability.name}>{Capitalize(ability.ability.name).replace(/-/g, ' ')} <span className="modal-ability-hidden">( Hidden )</span></div>
						: 
							<div key={ability.ability.name}>{Capitalize(ability.ability.name).replace(/-/g, ' ')}</div>
					)}
				</div>
			</div>
		 	<div className="modal-moves-title">Moves</div>
			<div className="modal-moves">
     		<NaturalMoves moves={pokemon.moves}/>
				<TutorMoves moves={pokemon.moves}/>
				<MachineMoves moves={pokemon.moves}/>
			</div>
		</div>
	)
};

export default Modal;
