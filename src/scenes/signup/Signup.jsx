import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';
import SignupForm from './SignupForm';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <AccountCircleIcon className={classes.icon} fontSize="large" />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <SignupForm />
        </div>
      </Container>
    </>
  );
}
