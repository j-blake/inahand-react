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
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const history = useHistory();
  const signup = useSignup();
  async function handleSignup() {
    if (!formRef.current.reportValidity()) {
      return;
    }
    const { isSignedUp, responseErrors } = await signup({
      email,
      password,
      firstName,
      lastName,
    });
    if (isSignedUp) {
      history.push('/');
    } else {
      setErrors(responseErrors);
    }
  }
  return (
    <>
      <form className={classes.form} ref={formRef}>
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
          error={errors.email !== undefined}
          helperText={errors.email || undefined}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          inputProps={{ minLength: 20, maxLength: 40 }}
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password !== undefined}
          helperText={errors.password || undefined}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="firstName"
          label="First Name"
          name="first_name"
          autoComplete="firstnamae"
          inputProps={{
            maxLength: 50,
            pattern: '[a-zA-Z\'.-]+',
            title: 'Letters, periods, apostrophes, and dashes are accepted',
          }}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          error={errors.firstName !== undefined}
          helperText={errors.firstName || undefined}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="lastName"
          label="Last Name"
          name="last_name"
          autoComplete="lastName"
          inputProps={{
            maxLength: 50,
            pattern: '[a-zA-Z\'.-]+',
            title: 'Letters, periods, apostrophes, and dashes are accepted',
          }}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          error={errors.lastName !== undefined}
          helperText={errors.lastName || undefined}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => handleSignup()}
        >
          Create your account
        </Button>
      </form>
    </>
  );
}
