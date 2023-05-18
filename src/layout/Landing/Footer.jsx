// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const Footer = () => (
  <Stack direction='row' justifyContent='space-between'>
    <Typography
      variant='subtitle2'
      component={Link}
      href='https://berrydashboard.io'
      target='_blank'
      underline='hover'
    >
      Developed by DisasterTechs Team
    </Typography>
    <Typography
      variant='subtitle2'
      component={Link}
      href='https://codedthemes.com'
      target='_blank'
      underline='hover'
    >
      &copy; {new Date().getFullYear()} All rights reserved
    </Typography>
  </Stack>
);

export default Footer;
