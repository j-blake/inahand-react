import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid, Typography, makeStyles,
} from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import * as actions from '../../data/actions/categoryActions';

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: theme.spacing.unit,
    color: theme.palette.text.primary,
  },
  backButton: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

export default function CategoryHeader() {
  const categories = useSelector((state) => state.category.categories);
  const parentId = useSelector((state) => state.category.activeCategory) || undefined;
  const parentName = parentId ? categories[parentId].name : undefined;
  const previousId = parentId ? categories[parentId].parent : undefined;
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Grid container>
        <Grid item>
          <Typography variant="h4">
            Categories&nbsp;
          </Typography>
        </Grid>
      </Grid>
      {/* todo this needs to be a button or something */}
      <Grid
        className={classes.backButton}
        container
        direction="row"
        alignItems="center"
        component="a"
        onClick={() => dispatch(actions.selectCategory(previousId))}
      >
        <Grid item>
          {parentName ? <ChevronLeft className={classes.icon} /> : ''}
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {parentName}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
