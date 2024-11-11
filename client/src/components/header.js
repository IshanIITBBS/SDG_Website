// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <AppBar position="static" style={{ marginLeft: 250 }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Overview
        </Typography>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
