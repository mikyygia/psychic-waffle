import "../index.css"

export default function BannedFilters ({bannedTypes, bannedGens, bannedWeight}) {
    return (
        <div className="banned-filters">
            <p>banned filters:</p>

            <div>
                {
                bannedTypes.map((ban, _) => {
                    return (
                        <button>{ban} type</button>
                    )
                })
                }

                {
                bannedGens.map((gen, _) => {
                    return (
                        <button>generation {gen}</button>
                    )
                })
                }

                {
                bannedWeight.map((weight, _) => {
                    return (
                        <button>{weight / 10} kg</button>
                    )
                })
                }
            </div>
            
        </div>
    );
}