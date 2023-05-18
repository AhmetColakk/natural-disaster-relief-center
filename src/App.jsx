import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from './routes';

// defaultTheme
import themes from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';
import { useEffect } from 'react';
import AppRoutes from './routes';

const App = () => {
  const customization = useSelector(state => state.customization);
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
    console.log(user);
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />

        <AppRoutes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
