import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Skeleton } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Education.module.css';
import React from 'react';

export default function Education() {
  const { setPageTitle } = usePageTitle();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPageTitle('Education');
    document.title = 'Portfolio | Education';
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  }, [setPageTitle]);

  const educationData = [
    {
      degree: 'Bachelors of Sciences in Artificial Intelligence',
      institution: 'Information Technology University of the Punjab',
      year: '2023-2027',
      description: 'Studying in the Bachelors of Science in Artificial Intelligence program (2023–2027) at Information Technology University of the Punjab.',
    },
  ];

  return (
    <Box className={`${styles.education} fade-in`} component="section">
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '1.75rem', md: '2.125rem' } }}
        component="h2"
      >
        Education
      </Typography>
      {loading ? (
        <>
          <Skeleton variant="rectangular" height={120} sx={{ mb: 2, borderRadius: 2 }} />
          <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
        </>
      ) : (
        educationData.map((edu, index) => (
          <Card
            key={index}
            elevation={2}
            sx={{ mb: 2, borderRadius: 2 }}
            component="article"
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {edu.degree}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {edu.institution}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {edu.year}
              </Typography>
              <Typography variant="body1">{edu.description}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}