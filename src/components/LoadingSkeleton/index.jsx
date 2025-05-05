import React from 'react';
import { Box, Skeleton } from '@mui/material';

export default function LoadingSkeleton() {
  return (
    <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: 1200, mx: 'auto' }}>
      <Skeleton variant="text" width="40%" height={40} sx={{ mb: 2 }} />
      <Skeleton variant="rectangular" height={200} sx={{ mb: 2, borderRadius: 2 }} />
      <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
    </Box>
  );
}