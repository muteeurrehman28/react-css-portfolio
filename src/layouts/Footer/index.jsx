import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Box className={styles.footer} component="footer">
      <Typography variant="body2" sx={{ fontWeight: 400 }}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
}