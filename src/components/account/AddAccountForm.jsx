import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';
import classNames from 'classnames';

import AccountService from './AccountService';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
}));


export default function AddAccountForm() {
  const classes = useStyles();
  const [accountName, setAccountName] = useState('');
  const [amount, setAmount] = useState(0);
  const handleAddAccount = (e) => {
    e.preventDefault();
    AccountService.addNewAccount({ accountName, amount });
  };
  return (
    <div>
      <TextField
        label="Account Name"
        id="account-name"
        name="accountName"
        className={classNames(classes.margin, classes.textField)}
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
      />
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="starting-balance">Starting Balance</InputLabel>
        <Input
          id="starting-balance"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <div>
        <Button
          color="default"
          className={classes.button}
          onClick={handleAddAccount}
        >
          Add Account
        </Button>
      </div>
    </div>
  );
}
