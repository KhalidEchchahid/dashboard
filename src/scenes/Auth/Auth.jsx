import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import { useAuthenticateAdminMutation } from 'state/api';
import { useNavigate } from 'react-router-dom';




export default function SignIn() {
    const theme = useTheme();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [authenticateAdmin, response] = useAuthenticateAdminMutation();
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      authenticateAdmin({ email, password });
    };

  console.log(response?.data);

    if (response?.data?.token) {
      localStorage.setItem('admin', JSON.stringify(response?.data));
      navigate('/dashboard');
      window.location.reload(false)
    }
  
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }