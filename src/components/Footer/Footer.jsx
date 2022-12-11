import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  const app_bar_style = {
    background: '#2E3B55',
  };
  return (
    <AppBar position='static' style={app_bar_style}>
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit'>
          Posts-App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
