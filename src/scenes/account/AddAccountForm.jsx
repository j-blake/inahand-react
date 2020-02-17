import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import * as actions from '../../data/actions/accountActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));


export default function AddAccountForm() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [accountName, setAccountName] = useState('');
  const [amount, setAmount] = useState('');
  const handleAddAccount = (e) => {
    e.preventDefault();
    dispatch(actions.addNewAccount({
      name: accountName,
      initialBalance: parseFloat(amount).toFixed(2),
    }));
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
