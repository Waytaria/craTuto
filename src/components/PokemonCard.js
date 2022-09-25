import '../styles/PokemonCard.css'

const PokemonCard = ({data, selected, updateSelected}) =>  {
    return (
        <div className="cart">
            <h1>{data.name.english}</h1>
            {<ul>
                {Object.keys(data.base).map((value) => {
                    return (
                        <li key={`${'pokemon' + data.id + '-' + value}`}>{value} : {data.base[value]}</li>
                    )
                })}
            </ul>}

            <button onClick={() => {
                updateSelected(data.id, true);
            }}>Ajouter</button>

            <button onClick={() => {
                updateSelected(data.id, false);
            }}>Supprimer</button>
        </div>
    );
};

export default PokemonCard;