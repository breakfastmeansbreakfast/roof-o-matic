import { useState } from 'react'
import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FactoryIcon from '@mui/icons-material/Factory';
import BusinessIcon from '@mui/icons-material/Business';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';


function App() {
  const [buildingName, setBuildingName] = useState(0)

  const handleButtonClick = (buildingName) => {
    setBuildingName(buildingName);
  };

  return (
    <>
      <h1>Roof-O-Matic</h1>
      <div className="card">
        <h4>BUILDING TYPOLOGY</h4>
      <Stack spacing={2} direction="row">
      <Button startIcon={<BusinessIcon />} variant={buildingName === 'Office' ? 'contained' : 'outlined'}  onClick={() => handleButtonClick('Office')}>
        Office
      </Button>
      <Button startIcon={<MapsHomeWorkIcon />} variant={buildingName === 'Residential' ? 'contained' : 'outlined'}  onClick={() => handleButtonClick('Residential')}>
        Residential
      </Button>
      <Button startIcon={<FactoryIcon />} variant={buildingName === 'Factory/Industrial' ? 'contained' : 'outlined'}  onClick={() => handleButtonClick('Factory/Industrial')}>
        Factory/Industrial
      </Button>
      </Stack>
      </div>
      <p className="read-the-docs">
        More building typologies coming soon.
      </p>
    </>
  )
}

export default App
