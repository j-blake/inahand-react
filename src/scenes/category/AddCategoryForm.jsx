import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import * as actions from '../../data/actions/categoryActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    margin: theme.spacing(),
  },
}));


export default function AddCategoryForm() {
  const [categoryName, setCategoryName] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const parent = useSelector((state) => state.category.activeCategory) || undefined;
  const handleAddCategory = (e) => {
    e.preventDefault();
    dispatch(actions.addNewCategory({
      name: categoryName,
      parent,
    }));
  };
  return (
    <>
      <TextField
        label="Category Name"
        id="category-name"
        name="categoryName"
        className={classNames(classes.margin, classes.textField)}
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <div>
        <Button
          color="default"
          className={classes.button}
          onClick={handleAddCategory}
        >
          Add Category
        </Button>
      </div>
    </>
  );
}
