import React from 'react';
import { useDispatch } from 'react-redux';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddCategoryModal from './AddCategoryModal';
import CategoryHeader from './CategoryHeader';
import CategoryList from './CategoryList';
import * as actions from '../../data/actions/categoryActions';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Category() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <CategoryHeader />
      <CategoryList />
      <Fab
        onClick={() => dispatch(actions.openAddCategoryModal())}
        className={classes.fab}
        color="primary"
        aria-label="Add"
      >
        <AddIcon />
      </Fab>
      <AddCategoryModal />
    </>
  );
}
