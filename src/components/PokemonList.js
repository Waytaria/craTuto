import Pokemon from '../json/pokedex.json';
import PokemonCard from './PokemonCard.js';
import '../styles/PokemonList.css';

const PokemonList = ({selected, updateSelected}) => {
    return (
        <div className="pokemonList">
            {Pokemon.map((value) => {
                return <PokemonCard 
                key={'pokemon' + value.id}
                data={value}
                selected={selected}
                updateSelected={updateSelected} />
            })}
        </div>
    );
}

export default PokemonList;