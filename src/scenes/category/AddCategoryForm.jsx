import React, { useState } from 'react';
import {
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';
import classNames from 'classnames';

import CategoryService from '../../services/CategoryService';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
}));


export default function AddCategoryForm(props) {
  const [categoryName, setCategoryName] = useState('');
  const classes = useStyles();
  const handleAddCategory = (e) => {
    e.preventDefault();
    CategoryService.addNewCategory({ categoryName, ...props });
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
