import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
const defaultTheme = createTheme();

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h5">
            Welcome, {user.name}
          </Typography>
          <Typography component="h3" variant="h5" mt={3}>
            {user.email}
          </Typography>

          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => dispatch(logOut())}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
