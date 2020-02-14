import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Typography, makeStyles } from '@material-ui/core';
import AddAccountForm from './AddAccountForm';

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

export default function AddAccountModal(props) {
  const { onClose } = props;
  const open = useSelector((state) => state.account.isAddAccountModalOpen);
  const classes = useStyles();

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
          <Typography variant="subtitle1" id="simple-modal-description">
            <AddAccountForm />
          </Typography>
        </div>
      </Modal>
    </div>
  );
}

AddAccountModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

AddAccountModal.defaultProps = {};
