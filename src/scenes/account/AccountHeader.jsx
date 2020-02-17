import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid, Typography, Button, makeStyles,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import * as actions from '../../data/actions/accountActions';

const useStyles = makeStyles((theme) => ({
  button: theme.button,
}));

export default function AccountHeader() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const receievedAt = new Date(useSelector((state) => state.account.receivedAt))
    .toLocaleTimeString();
  const updatedText = `(updated ${receievedAt})`;
  return (
    <>
      <Grid container>
        <Grid item>
          <Typography variant="h4">
            Accounts
            <Button
              onClick={() => dispatch(actions.refreshAccounts())}
              className={classes.button}
              size="small"
            >
              <RefreshIcon />
            </Button>
          </Typography>
          <Typography variant="caption">{updatedText}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
