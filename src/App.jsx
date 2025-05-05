import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, useMediaQuery } from '@mui/material';
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeContextProvider, useThemeContext } from './context/ThemeContext';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SideNav from './layouts/SideNav';
import LoadingSkeleton from './components/LoadingSkeleton';

const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function AppContent() {
  const { mode } = useThemeContext();
  const isMobile = useMediaQuery('(max-width:768px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawerWidth = 260; // Matches the SideNav width (260px on sm and up, 240px on xs)

  const theme = createTheme({
    palette: {
      mode,
      primary: { main: '#1976d2' },
      secondary: { main: '#f50057' },
      background: {
        default: mode === 'light' ? '#f5f7fa' : '#1a1a1a',
        paper: mode === 'light' ? '#ffffff' : '#2c2c2c',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            padding: '8px 16px',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
        className={mode}
      >
        <Header toggleDrawer={toggleDrawer} />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {(!isMobile || mobileOpen) && (
            <SideNav mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} />
          )}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: { xs: 2, md: 3 },
              bgcolor: 'background.paper',
              minHeight: '100%',
              marginLeft: !isMobile ? `${drawerWidth}px` : 0, // Shift main content to the right on desktop
              transition: 'margin-left 0.3s ease', // Smooth transition for drawer open/close
            }}
          >
            <Suspense fallback={<LoadingSkeleton />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <PageTitleProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeContextProvider>
    </PageTitleProvider>
  );
}