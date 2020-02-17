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
import useCategory from '../../hooks/category/useCategory';
import * as actions from '../../data/actions/categoryActions';

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
  return (
    <>
      <List>
        {categories.map((category) => (
          <Paper className={classes.root} key={category._id}>
            <ListItem
              className={classes.paper}
              button
              onClick={() => dispatch(actions.selectCategory(category._id))}
            >
              <ListItemText>
                <Typography variant="body1">{category.name}</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => dispatch(actions.deleteCategory(category._id))} aria-label="Delete">
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
