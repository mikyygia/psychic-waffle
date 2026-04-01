import "../index.css"

export default function BannedFilters ({bannedTypes, bannedGens, bannedWeight, updateGen, updateType, updateWeight}) {
    const removeBan = (option, value) => {
        if (option == "gen") {
            const newGens = bannedGens.filter(g => g !== value);
            updateGen(newGens);
        } else if (option == "type") {
            const newTypes = bannedTypes.filter(t => t !== value);
            updateType(newTypes);
        } else { // weight
            const newWeight = bannedWeight.filter(w => w !== value);
            updateWeight(newWeight);
        }
    }

    return (
        <div className="banned-filters">
            <p>banned filters:</p>

            <div>
                {
                bannedTypes.map((ban, _) => {
                    return (
                        <button key={ban} onClick={() => removeBan("type", ban)}>{ban} type</button>
                    )
                })
                }

                {
                bannedGens.map((gen, _) => {
                    return (
                        <button key={gen} onClick={() => removeBan("gen", gen)}>generation {gen}</button>
                    )
                })
                }

                {
                bannedWeight.map((weight, _) => {
                    return (
                        <button key={weight} onClick={() => removeBan("w", weight)}>{weight / 10} kg</button>
                    )
                })
                }
            </div>
            
        </div>
    );
}