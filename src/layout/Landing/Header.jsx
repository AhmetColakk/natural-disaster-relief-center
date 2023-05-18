import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Close, HomeRepairServiceOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { width } from '@mui/system';

const drawerWidth = '100%';
const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/Contact',
  },
  {
    name: 'Login',
    path: '/auth/login',
  },
  {
    name: 'Register',
    path: '/auth/register',
  },
];

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const state = useSelector(state => state);
  console.log(mobileOpen);
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawerVariants = {
    open: {
      x: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 60,
      },
    },
    closed: {
      x: '-100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography variant='h6' sx={{ my: 2 }}>
        Disaster Relief App
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <motion.div
            key={item.name}
            variants={drawerVariants}
            animate={mobileOpen ? 'open' : 'closed'}
          >
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: 'center' }}
                component={Link}
                to={item.path}
              >
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>
      <Box
        sx={{
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Button
          size='large'
          variant='contained'
          color='error'
          startIcon={<Close />}
        >
          Close
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <HomeRepairServiceOutlined
            sx={{ fontSize: 40, ml: { xs: 'auto' } }}
          />
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Disaster Relief Apps
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button
                key={item.name}
                sx={{ color: '#fff' }}
                component={Link}
                to={item.path}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Appbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Appbar;
