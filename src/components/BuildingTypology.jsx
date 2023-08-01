import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FactoryIcon from '@mui/icons-material/Factory';
import BusinessIcon from '@mui/icons-material/Business';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';


function BuildingTypology({ buildingTypology, handleButtonClick }) {

  return (
    <div>
    <h4>BUILDING TYPOLOGY</h4>
      <Stack spacing={2} direction="row">
      <Button startIcon={<BusinessIcon />} variant={buildingTypology === 'Office' ? 'contained' : 'outlined'}  onClick={() => handleButtonClick('Office')}>
        Office
      </Button>
      <Button startIcon={<MapsHomeWorkIcon />} variant={buildingTypology === 'Residential' ? 'contained' : 'outlined'}  onClick={() => handleButtonClick('Residential')}>
        Residential
      </Button>
      <Button startIcon={<FactoryIcon />} variant={buildingTypology === 'Factory/Industrial' ? 'contained' : 'outlined'}  onClick={() => handleButtonClick('Factory/Industrial')}>
        Factory/Industrial
      </Button>
      </Stack>
      </div>
  );
}

BuildingTypology.propTypes = {
    buildingTypology: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    handleButtonClick: PropTypes.func.isRequired,
  };
  

export default BuildingTypology;
