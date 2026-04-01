import "../index.css"

export default function Saved ({savedPokemon, renderPokemon}) {
    return (
        <div>
            <hr />

            <p>saved pokemon:</p>

            <ul>
                {
                    savedPokemon.map((pokemon, index) => {
                        return (
                            <li key={index} onClick={() => renderPokemon(pokemon.id)} className="saved-pkm">{pokemon.name}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}