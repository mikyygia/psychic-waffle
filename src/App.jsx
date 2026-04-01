import './App.css'
import { useState } from "react";
import BannedFilters from './components/BannedFilters';
import Randomize from './components/Randomize'
import Saved from './components/Saved'
import ShowPokemon, {getGenId} from './components/ShowPokemon'


function App() {
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [loading, setLoading] = useState(false);
    // types able to get banned
    const [typeBanList, setTypeBanList] = useState([]);
    const [genBanList, setGenBanList] = useState([]);
    const [weightBanList, setWeightBanList] = useState([]);

    const getRandomPokemon = async () => {
      const maxAttempts = 50;
      setLoading(true);

      try {
        for (let i = 0; i < maxAttempts; i++) {
            const randomId = Math.floor(Math.random() * 1025) + 1;
            
            // check for banned gens
            if (genBanList.includes(getGenId(randomId))) continue;

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const data = await res.json();

            // filter by types & weight
            const type = data.types.map(t => t.type.name);
            const weight = data.weight;

            if (typeBanList.some(t => type.includes(t))) continue;
            if (weightBanList.includes(weight)) continue;

            setCurrentPokemon(data);
            return;
        };

      } catch (error) {
          console.log(error);
      } finally {
          setLoading(false);
      }
    };

    const onSetTypeBanList = (type) => {
      if (!typeBanList.includes(type)) { // don't add if it already exists
        setTypeBanList([...typeBanList, type]);
      }
    }

    const onSetGenBanList = (gen) => {
      if (!genBanList.includes(gen)) { // don't add if it already exists
        setGenBanList([...genBanList, gen]);
      }
    }

    const onSetWeightBanList = (weight) => {
      if (!weightBanList.includes(weight)) { // don't add if it already exists
        setWeightBanList([...weightBanList, weight]);
      }
    }
    

  return (
    <div className="container">
      <div className="info-section">
        <h1>discover your pokemon</h1>
        <BannedFilters 
            bannedTypes={typeBanList}
            bannedGens={genBanList}
            bannedWeight={weightBanList}
        />
        <Randomize onFetch={getRandomPokemon}/>
        {/* <Saved /> */}
      </div>
    
      <div className="display-section">
        <ShowPokemon state={loading} data={currentPokemon} 
                // banned types
                banType={onSetTypeBanList}

                // banned generations
                banGen={onSetGenBanList}

                // banned weight (kg)
                banWeight={onSetWeightBanList}
        />
      </div>
    </div>
  )
}

export default App
