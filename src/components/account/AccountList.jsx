import React from 'react';
import { useSelector } from 'react-redux';
import {
  List, Paper, Grid, Typography, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },
}));

export default function AccountList() {
  const classes = useStyles();
  const accounts = useSelector((state) => state.account.accounts);
  return (
    <>
      <List className={classes.root}>
        {accounts.map((account) => (
          // eslint-disable-next-line no-underscore-dangle
          <Paper key={account._id} className={classes.paper}>
            <Grid container alignContent="space-between">
              <Grid item xs={6}>
                <Typography variant="body1">{account.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right" variant="body1">
                  {Number.isFinite(account.currentBalance)
                    ? `$${Number.parseFloat(account.currentBalance)
                      .toFixed(2)
                      .toString()}`
                    : 'N/A'}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </List>
    </>
  );
}
