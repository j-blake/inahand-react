import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  TextField,
  Button,
  withStyles,
} from '@material-ui/core';
import classNames from 'classnames';

import AccountService from './AccountService';

const styles = theme => ({
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
});

class AddAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      accountName: '',
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleAddAccount = (e) => {
    e.preventDefault();
    AccountService.addNewAccount(this.state);
  }

  render() {
    const { classes } = this.props;
    const { accountName, amount } = this.state;
    return (
      <div>
        <TextField
          label="Account Name"
          id="account-name"
          name="accountName"
          className={classNames(classes.margin, classes.textField)}
          value={accountName}
          onChange={this.handleChange}
        />
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="starting-balance">Starting Balance</InputLabel>
          <Input
            id="starting-balance"
            name="amount"
            value={amount}
            onChange={this.handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <div>
          <Button
            color="default"
            className={classes.button}
            onClick={this.handleAddAccount}
          >
            Add Account
          </Button>
        </div>
      </div>
    );
  }
}

AddAccountForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

AddAccountForm.defaultProps = {};

export default withStyles(styles)(AddAccountForm);
