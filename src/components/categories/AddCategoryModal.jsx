import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Typography, withStyles } from '@material-ui/core';
import AddCategoryForm from './AddCategoryForm';

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

function AddCategoryModal(props) {
  const {
    open,
    onClose,
    classes,
    parentId,
  } = props;

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="subtitle1" id="simple-modal-description">
            <AddCategoryForm parentId={parentId} />
          </Typography>
        </div>
      </Modal>
    </div>
  );
}

AddCategoryModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  parentId: PropTypes.string,
};

AddCategoryModal.defaultProps = {
  open: false,
  parentId: undefined,
  onClose: undefined,
};

export default withStyles(styles)(AddCategoryModal);
