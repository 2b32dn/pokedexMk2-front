import React from 'react';
import Capitalize from '../../tools/Capitalize'


const Modal = ({ show, pokemon, pokemonExtra, pkmnTypes }) => {
	let modalClasses = 'modal-hidden';
	if (show) {
		modalClasses = 'modal';
	}
	console.log(pokemon)
	// let type = pokemon.types.map( types => {
		
	// })
	return pokemon ? (
		<div className={modalClasses} >
			

			<div className="modal-pokemon-name">
				{Capitalize(pokemon.name)}
			</div>

			<div className="modal-img-stats">
				<img alt={pokemon.name} src={pokemon.sprites.front_default} className="modal-img"/>
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
							<span className="modal-stats-bar">
								<div className="modal-stats-front" style={{width: `${stat.base_stat}%`}}>{stat.base_stat}</div>
								<div className="modal-stats-back">
								pokemon
								</div>
							</span>
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

			<div>
				<div className="modal-characteristics">Characteristics</div>
				<div>
					{pokemon.abilities.map((ability) => <div key={ability.ability.name} className="modal-abilities">{Capitalize(ability.ability.name).replace(/-/g, ' ')}</div>)}
				</div>
			</div>

			<div>
				<div className="modal-moves-title">Moves</div>
			</div>

			<div className="modal-moves">
     		{pokemon.moves.map(move=> <div key={move.move.name}>{Capitalize(move.move.name).replace(/-/g, ' ')}</div>)}
			</div>
		</div>
	) : (
		<div className={modalClasses}>No Data</div>
	);
};

export default Modal;
