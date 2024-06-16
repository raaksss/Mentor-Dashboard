import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function FooterAdmin() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#523521',
        color: '#E9C874',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        p: 2,
      }}
    >
      <Typography variant="body1">
        Copyright © 2024 Eklavya Grassroots And Education Development Foundation. All rights reserved.
      </Typography>
    </Box>
  );
}
