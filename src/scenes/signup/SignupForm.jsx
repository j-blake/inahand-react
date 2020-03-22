import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useSignup from '../../hooks/signup/useSignup';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const history = useHistory();
  const signup = useSignup();
  function handleLogin() {
    setEmail('');
    emailRef.current.value = '';
    setPassword('');
    passwordRef.current.value = '';
    setFirstName('');
    firstNameRef.current.value = '';
    setLastName('');
    lastNameRef.current.value = '';
    const isSignedUp = signup({
      email,
      password,
      firstName,
      lastName,
    });
    if (isSignedUp) {
      history.push('/');
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
          id="firstName"
          label="First Name"
          name="first_name"
          autoComplete="firstnamae"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          inputRef={firstNameRef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="last_name"
          autoComplete="lastName"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          inputRef={lastNameRef}
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
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => handleLogin()}
        >
          Create your account
        </Button>
      </form>
    </>
  );
}
