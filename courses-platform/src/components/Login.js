import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
}));

const StyledForm = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a chamada para a API de login e autenticar o usuário
    // Depois de autenticar o usuário, redirecione para a página de cursos
    navigate('/courses');
  };

  return (
    <StyledContainer maxWidth="xs">
      <Typography component="h1" variant="h5" align="center">
        Login
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nome de usuário"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit" fullWidth variant="contained" color="primary">
          Entrar
        </StyledButton>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <MuiLink href="/register" variant="body2">
              Não possui uma conta? Registre-se
            </MuiLink>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
}

export default Login;