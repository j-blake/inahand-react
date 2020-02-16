import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Typography, makeStyles } from '@material-ui/core';
import AddCategoryForm from './AddCategoryForm';

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

export default function AddCategoryModal(props) {
  const {
    open,
    onClose,
    parentId,
  } = props;
  const classes = useStyles();

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
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
  parentId: PropTypes.string,
};

AddCategoryModal.defaultProps = {
  open: false,
  parentId: undefined,
  onClose: undefined,
};
