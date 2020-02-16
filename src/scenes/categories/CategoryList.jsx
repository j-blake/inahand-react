/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
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

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    cursor: 'pointer',
  },
}));

export default function CategoryList(props) {
  const { categories, onClickCategory, onClickDelete } = props;
  const classes = useStyles();
  return (
    <>
      <List>
        {categories.map((category) => (
          <Paper className={classes.root} key={category._id}>
            <ListItem
              className={classes.paper}
              button
              onClick={() => onClickCategory(category._id)}
            >
              <ListItemText>
                <Typography variant="body1">{category.name}</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => onClickDelete(category._id)} aria-label="Delete">
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

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  onClickCategory: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

CategoryList.defaultProps = {
  categories: [],
};
