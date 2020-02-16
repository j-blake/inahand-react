import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddCategoryModal from './AddCategoryModal';
import CategoryHeader from './CategoryHeader';
import CategoryList from './CategoryList';
import service from '../../services/CategoryService';
import * as actions from '../../data/actions/categoryActions';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
}));

export default function Category() {
  useEffect(() => {
    async function fetchData() {
      await service.fetchCategories();
    }
    fetchData();
  }, []);
  const classes = useStyles();
  const dispatch = useDispatch();
  const parentId = useSelector((state) => state.category.activeCategory) || undefined;
  const categories = useSelector((state) => state.category.categories);
  const selectedCategories = Object.values(categories)
    .filter((category) => category.parent === parentId);
  const isModalOpen = useSelector((state) => state.category.isAddCategoryModalOpen);
  const parentName = parentId ? categories[parentId].name : undefined;
  const previousId = parentId ? categories[parentId].parent : undefined;

  return (
    <>
      <CategoryHeader
        previousId={previousId}
        parentName={parentName}
        onClickBack={(id) => dispatch(actions.selectCategory(id))}
      />
      <CategoryList
        categories={selectedCategories}
        onClickCategory={(id) => dispatch(actions.selectCategory(id))}
        onClickDelete={(id) => dispatch(actions.deleteCategory(id))}
      />
      <Fab
        onClick={() => dispatch(actions.openAddCategoryModal())}
        className={classes.fab}
        color="primary"
        aria-label="Add"
      >
        <AddIcon />
      </Fab>
      <AddCategoryModal
        parentId={parentId}
        open={isModalOpen}
        onClose={() => dispatch(actions.closeAddCategoryModal())}
      />
    </>
  );
}
