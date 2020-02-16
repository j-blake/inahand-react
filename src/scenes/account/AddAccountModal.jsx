import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Typography, makeStyles } from '@material-ui/core';
import AddAccountForm from './AddAccountForm';
import * as actions from '../../data/actions/accountActions';

const top = 50;
const left = 50;

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  },
}));

export default function AddAccountModal() {
  const open = useSelector((state) => state.account.isAddAccountModalOpen);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <Modal open={open} onClose={() => dispatch(actions.closeAddAccountModal())}>
        <div className={classes.paper}>
          <Typography variant="subtitle1" id="simple-modal-description">
            <AddAccountForm />
          </Typography>
        </div>
      </Modal>
    </div>
  );
}
