/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  List,
  Paper,
  ListItem,
  Typography,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useCategory from '../../hooks/category/useCategoryList';
import { selectCategory } from '../../data/actions/categoryActions';
import useCategoryDelete from '../../hooks/category/useCategoryDelete';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    cursor: 'pointer',
  },
}));

export default function CategoryList() {
  const classes = useStyles();
  const categories = useCategory();
  const dispatch = useDispatch();
  const deleteCategory = useCategoryDelete();
  return (
    <>
      <List>
        {categories.map((category) => (
          <Paper className={classes.root} key={category.id}>
            <ListItem
              className={classes.paper}
              button
              onClick={() => dispatch(selectCategory(category.id))}
            >
              <ListItemText>
                <Typography variant="body1">{category.name}</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => deleteCategory(category.id)} aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        ))}
      </List>
    </>
  );
}
