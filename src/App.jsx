import './App.css'
import ModifyFilters from './components/ModifyFilters'
import Randomize from './components/Randomize'
import Saved from './components/Saved'
import ShowPokemon from './components/ShowPokemon'

function App() {

  return (
    <div className="container">
      <div className="info-section">
        <ModifyFilters />
        <Randomize />
        <Saved />
      </div>
    
      <div className="display-section">
        <ShowPokemon />
      </div>
    </div>
  )
}

export default App
