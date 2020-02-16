import React from 'react';
import { useDispatch } from 'react-redux';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import * as actions from '../../data/actions/accountActions';
import AddAccountModal from './AddAccountModal';
import AccountHeader from './AccountHeader';
import AccountList from './AccountList';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 4,
  },
}));

export default function AccountView() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
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
      <AddAccountModal />
    </>
  );
}
