import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useLogin from '../../hooks/login/useLogin';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();
  const login = useLogin();
  function handleLogin() {
    setEmail('');
    emailRef.current.value = '';
    setPassword('');
    passwordRef.current.value = '';
    const isLoggedIn = login({ email, password });
    if (isLoggedIn) {
      history.push('/dashboard');
    }
  }
  return (
    <>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          inputRef={emailRef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          inputRef={passwordRef}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => handleLogin()}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Button size="small">
              Forgot password?
            </Button>
          </Grid>
          <Grid item>
            <Link to="sign-up">
              <Button size="small">
                Sign up
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
