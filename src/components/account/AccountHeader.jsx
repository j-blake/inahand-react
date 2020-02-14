import React from 'react';
import { useSelector } from 'react-redux';
import {
  Grid, Typography, Button, makeStyles,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import service from './AccountService';

const useStyles = makeStyles((theme) => ({
  button: theme.button,
}));

export default function AccountHeader() {
  const classes = useStyles();
  const receievedAt = new Date(useSelector((state) => state.account.receivedAt))
    .toLocaleTimeString();
  const updatedText = `(updated ${receievedAt})`;
  return (
    <>
      <Grid container>
        <Grid item>
          <Typography variant="h4">
            Accounts&nbsp;
            <Button onClick={() => service.refreshAccounts()} className={classes.button} size="small">
              <RefreshIcon />
            </Button>
          </Typography>
          <Typography variant="caption">{updatedText}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
