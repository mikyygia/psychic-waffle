import "../index.css"
const gen = [151, 251, 386, 493, 649, 721, 809, 905, 1025];

export const getGenId = (id) => {
    for (let i = 0; i < gen.length; i++) {
        if (id <= gen[i]) {
            return i + 1;
        }
    }
}

export default function ShowPokemon ({state, data, banType, banGen, banWeight}) {
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
                            
                            {/* <button className="pokemon-save-btn">save</button> wip feature*/}
                        </div>


                        <div className="filter-type">
                            <h4>attributes <span>(click to move to ban list):</span></h4>
                            {
                                data.types.map((t, index) => {
                                    return (
                                        <button onClick={() => banType(t.type.name)} className="filter-option">{t.type.name}</button>
                                    );
                                })
                            }

                            { <button onClick={() => banGen(getGenId(data.id))} className="filter-option">generation {getGenId(data.id)}</button> }

                            { <button onClick={() => banWeight(data.height)}>{data.height} kg</button> }
                        </div>
                    </div>
                ) : (
                    <p>click discover button to get a pokemon!</p>
                )
            }
        </div>
    );
};