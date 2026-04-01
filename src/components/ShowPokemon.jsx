import "../index.css"
import { getGenId } from "../utils.jsx"

export default function ShowPokemon ({state, data, banType, banGen, banWeight, saveNewPokemon}) {
    return (
        <div>
            {
                state ? (
                    <p> loading ...</p>
                ) : data.name ? (
                    <div className="pokemon-info">
                        <div>
                            <p className="pokemon-name">{data.name.replace("-", "")}</p>

                            <img className="pokemon-img" src={
                                        data.sprites.other.dream_world.front_default ? // i like how these sprites look better
                                        data.sprites.other.dream_world.front_default : 
                                        data.sprites.other.home.front_default
                                    } 
                                alt={data.name} />
                            
                            <button onClick={() => saveNewPokemon(data.name, data.id)} className="pokemon-save-btn">save</button>
                        </div>


                        <div className="filter-type">
                            <h4>attributes <span>(click to move to ban list):</span></h4>
                            {
                                data.types.map((t, _) => {
                                    return (
                                        <button onClick={() => banType(t.type.name)} className="filter-option">{t.type.name}</button>
                                    );
                                })
                            }

                            { <button onClick={() => banGen(getGenId(data.id))} className="filter-option">generation {getGenId(data.id)}</button> }

                            { <button onClick={() => banWeight(data.weight)}>{data.weight / 10} kg</button> }

                        </div>
                    </div>
                ) : (
                    <p>click discover button to get a pokemon!</p>
                )
            }
        </div>
    );
};