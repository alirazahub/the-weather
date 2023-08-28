import { Typography } from '@mui/material';
import React from 'react';

const PoweredBy = () => {
  const value = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255,255,255, .85)',
        fontFamily: 'Poppins',
        textAlign: 'center',
        margin: '1rem 0',
        maxWidth: '80%',
        lineHeight: '20px',
        float: 'right'
      }}
    >
      <div>Designed & Developed by  <a href="https://www.github.com/alirazahub" target="_blank">alirazahub</a></div> 
    </Typography>
  );
  return value;
};

export default PoweredBy;
