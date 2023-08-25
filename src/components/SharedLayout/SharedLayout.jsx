import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLinkStyled } from './SharedLayout.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const SharedLayout = () => {
  const isAuth = useSelector(selectIsLoggedIn);

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
            {isAuth ? (
              <NavLinkStyled to="/logout">Logout</NavLinkStyled>
            ) : (
              <>
                <NavLinkStyled to="/login">Login</NavLinkStyled>
                <NavLinkStyled to="/register">Register</NavLinkStyled>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
