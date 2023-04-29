import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Link as MuiLink,
    FormControlLabel,
    Checkbox,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogActions,
} from '@mui/material';
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

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsConsent, setTermsConsent] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogContentText, setDialogContentText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            openDialog('Erro', 'As senhas não coincidem. Por favor, verifique novamente.');
            return;
        }

        if (!termsConsent) {
            openDialog('Erro', 'Por favor, aceite os termos de uso para se registrar.');
            return;
        }

        // Aqui você pode fazer a chamada para a API de registro e criar um novo usuário
        // Depois de criar o usuário, redirecione para a página de login
        navigate('/');
    };

    const openDialog = (title, contentText) => {
        setDialogTitle(title);
        setDialogContentText(contentText);
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <StyledContainer maxWidth="xs">
            <Typography component="h1" variant="h5" align="center">
                Registrar
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
                    id="email"
                    label="Endereço de e-mail"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirmar senha"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={termsConsent}
                            onChange={(e) => setTermsConsent(e.target.checked)}
                            name="termsConsent"
                            color="primary"
                        />
                    }
                    label="Aceito os termos de uso"
                />
                <StyledButton type="submit" fullWidth variant="contained" color="primary">
                    Registrar
                </StyledButton>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <MuiLink href="/" variant="body2">
                            Já possui uma conta? Entrar
                        </MuiLink>
                    </Grid>
                </Grid>

                <Dialog
                    open={dialogOpen}
                    onClose={closeDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                    <DialogContentText id="alert-dialog-description">
                        {dialogContentText}
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={closeDialog} color="primary">
                            Fechar
                        </Button>
                    </DialogActions>
                </Dialog>
            </StyledForm>
        </StyledContainer>
    );
}

export default Register;