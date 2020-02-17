import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Typography, makeStyles } from '@material-ui/core';
import AddCategoryForm from './AddCategoryForm';
import * as actions from '../../data/actions/categoryActions';

const top = 50;
const left = 50;
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  },
}));

export default function AddCategoryModal() {
  const classes = useStyles();
  const parentId = useSelector((state) => state.category.activeCategory) || undefined;
  const isModalOpen = useSelector((state) => state.category.isAddCategoryModalOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal open={isModalOpen} onClose={() => dispatch(actions.closeAddCategoryModal())}>
        <div className={classes.paper}>
          <Typography variant="subtitle1" id="simple-modal-description">
            <AddCategoryForm parentId={parentId} />
          </Typography>
        </div>
      </Modal>
    </div>
  );
}
