import { AppBar, Toolbar } from '@mui/material';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import React from 'react';
import './style.scss';
export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar className='toolbar-center' variant='dense'>
        <LocalPostOfficeIcon fontSize='large' />
      </Toolbar>
    </AppBar>
  );
}
