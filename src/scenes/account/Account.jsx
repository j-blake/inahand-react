import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import * as actions from '../../data/actions/accountActions';
import AddAccountModal from './AddAccountModal';
import AccountHeader from './AccountHeader';
import AccountList from './AccountList';
import service from '../../services/AccountService';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 4,
  },
}));

export default function AccountView() {
  useEffect(() => {
    async function fetchData() {
      await service.refreshAccounts();
    }
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div>
      <AccountHeader />
      <AccountList />
      <Fab
        onClick={() => dispatch(actions.openAddAccountModal())}
        className={classes.fab}
        color="primary"
        aria-label="Add"
      >
        <AddIcon />
      </Fab>
      <AddAccountModal
        onClose={() => dispatch(actions.closeAddAccountModal())}
      />
    </div>
  );
}
