import { useState } from 'react'
import './App.css'
import BuildingTypology from './components/BuildingTypology';


function App() {
  const [buildingTypology, setBuildingTypology] = useState(0)
  
  return (
    <>
      <div>
      <h1>Roof-O-Matic</h1>
      <BuildingTypology buildingTypology={buildingTypology} handleButtonClick={setBuildingTypology} />
      </div>
      <p className="read-the-docs">
        More building typologies coming soon.
      </p>
    </>
  )
}

export default App
