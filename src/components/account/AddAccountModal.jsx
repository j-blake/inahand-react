import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Typography, withStyles } from '@material-ui/core';
import AddAccountForm from './AddAccountForm';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

function AddAccountModal(props) {
  const { open, onClose, classes } = props;

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="subtitle1" id="simple-modal-description">
            <AddAccountForm />
          </Typography>
        </div>
      </Modal>
    </div>
  );
}

AddAccountModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

AddAccountModal.defaultProps = {
  open: false,
};

export default withStyles(styles)(AddAccountModal);
