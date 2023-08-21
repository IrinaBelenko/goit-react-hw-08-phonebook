import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLinkStyled } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLinkStyled to="/" end>
                Contacts
              </NavLinkStyled>
            </Typography>
            <NavLinkStyled to="/login">Login</NavLinkStyled>
            <NavLinkStyled to="/register">Register</NavLinkStyled>
          </Toolbar>
        </AppBar>
      </Box>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
