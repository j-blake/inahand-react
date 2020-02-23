import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import useCategoryCreate from '../../hooks/category/useCategoryCreate';

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
  const parent = useSelector((state) => state.category.activeCategory) || undefined;
  const addCategory = useCategoryCreate();
  const handleAddCategory = (e) => {
    e.preventDefault();
    addCategory({ name: categoryName, parent });
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
