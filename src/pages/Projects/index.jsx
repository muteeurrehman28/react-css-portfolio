import { useEffect, useState } from 'react';
import { Box, Typography, Grid, Skeleton } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css';
import React from 'react';

export default function Projects() {
  const { setPageTitle } = usePageTitle();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPageTitle('Projects');
    document.title = 'Portfolio | Projects';
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  }, [setPageTitle]);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack web application built with React, Node.js, and MongoDB.',
      link: '#',
      image: '/assets/project1.jpg',
    },
    {
      title: 'Task Manager App',
      description: 'A mobile-friendly task management app using React Native and Firebase.',
      link: '#',
      image: '/assets/project2.jpg',
    },
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio built with React and Material-UI.',
      link: '#',
      image: '/assets/project3.jpg',
    },
  ];

  return (
    <Box className={`${styles.projects} fade-in`} component="section">
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.75rem', md: '2.125rem' } }}
        component="h2"
      >
        Projects
      </Typography>
      {loading ? (
        <Grid container spacing={3}>
          {[1, 2, 3].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Skeleton variant="rectangular" height={240} sx={{ borderRadius: 2 }} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}