import Pokemon from '../json/pokedex.json';
import Cart from './Cart.js';
import '../styles/PokemonList.css';

const PokemonList = () => {
    return (
        <div className="pokemonList">
            {Pokemon.map((value, index) => {
                return <Cart key={'pokemon' + value.id} data={value} />
            })}
        </div>
    );
}

export default PokemonList;