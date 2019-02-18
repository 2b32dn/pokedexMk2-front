import React from 'react';
import Capitalize from '../../tools/Capitalize'

import StatusBar from '../modal/StatusBar'
import Image from '../modal/Image'

const Modal = ({ show, pokemon, pokemonExtra, pkmnTypes }) => {

	let modalClasses = 'modal-hidden';
	if (show) {
		modalClasses = 'modal';
	}
	console.log(pokemon)
	console.log(pokemonExtra)

	return (pokemon && pokemonExtra && pkmnTypes) ? (
		<div className={modalClasses} >
			{/* {types.push(pkmnTypes.map( (type)=> type.name))} */}
			<div className="modal-pokemon-name">
				{Capitalize(pokemon.name)}
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
				{/* <div>
					{pokemonExtra.flavor_text_entries.map( (entry, id) => 
						(entry.version.name === "omega-ruby" && entry.language.name === "en" || entry.version.name === "ultra-sun" && entry.language.name === "en" )
						? 
							<div key={id}>{entry.flavor_text}</div> 
						: 
							null
					)}
				</div> */}
				{/* <div>
					Habitat: {pokemonExtra.habitat.name}
				</div> */}
			<div className="modal-characteristics">
				<div>
					{pokemonExtra.genera.map( genus => (genus.language.name === 'en')? <div key={genus.genus}>{genus.genus.replace(/é/g, 'e')}</div> : null)}
				</div>
					Egg Group: {pokemonExtra.egg_groups.map(group => <li key={group.name}>{Capitalize(group.name)}</li>)}
					Abilities: {pokemon.abilities.map((ability) => <div key={ability.ability.name}>{Capitalize(ability.ability.name).replace(/-/g, ' ')}</div>)}
			</div>
		 	<div className="modal-moves-title">Moves</div>
			<div className="modal-moves">
     		{pokemon.moves.map(move=> <div key={move.move.name}>{Capitalize(move.move.name).replace(/-/g, ' ')}</div>)}
			</div>
		</div>
	) : (
		<div className={modalClasses}></div>
	);
};

export default Modal;
