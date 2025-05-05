import { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Home.module.css';
import React from 'react';

export default function Home() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home');
    document.title = 'Portfolio | Home';
  }, [setPageTitle]);

  return (
    <Box className={`${styles.home} fade-in`} component="section">
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}
        component="h2"
      >
        Welcome to My Portfolio
      </Typography>
      <Typography
        variant="h6"
        sx={{ mb: 4, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
      >
        I'm a passionate web developer crafting modern, responsive applications. Explore my projects and skills.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        href="/projects"
        size="large"
        sx={{ px: 4, py: 1.5 }}
        aria-label="View projects"
      >
        View My Work
      </Button>
    </Box>
  );
}