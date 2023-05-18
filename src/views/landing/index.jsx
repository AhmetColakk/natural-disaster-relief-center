import { useLocation } from 'react-router-dom';
import LandingLayout from '../../layout/Landing';
import { Typography } from '@mui/material';

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <LandingLayout>
      <Typography>Landing page</Typography>
    </LandingLayout>
  );
};

export default Home;
