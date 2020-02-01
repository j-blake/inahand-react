/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {
  Paper,
  List,
  ListItem,
  Grid,
  Fab,
  IconButton,
  withStyles,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCategoryModal from './AddCategoryModal';

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
    color: theme.palette.text.primary,
  },
  root: {
    color: theme.palette.text.primary,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  backButton: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    cursor: 'pointer',
  },
});

const Category = ({
  classes,
  parentId,
  categories,
  isModalOpen,
  previousId,
  parentName,
  onClickCategory,
  onClickBack,
  onClickFab,
  onClose,
  onClickDelete,
}) => (
  <div>
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
      onClick={() => onClickBack(previousId)}
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
    <List>
      {categories.map(category => (
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
    <Fab
      onClick={onClickFab}
      className={classes.fab}
      color="primary"
      aria-label="Add"
    >
      <AddIcon />
    </Fab>
    <AddCategoryModal
      parentId={parentId}
      open={isModalOpen}
      onClose={onClose}
    />
  </div>
);

Category.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  parentId: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  isModalOpen: PropTypes.bool,
  previousId: PropTypes.string,
  parentName: PropTypes.string,
  onClickCategory: PropTypes.func,
  onClickBack: PropTypes.func,
  onClickFab: PropTypes.func,
  onClose: PropTypes.func,
  onClickDelete: PropTypes.func,
};

Category.defaultProps = {
  parentId: undefined,
  categories: [],
  isModalOpen: undefined,
  previousId: undefined,
  parentName: undefined,
  onClickCategory: undefined,
  onClickBack: undefined,
  onClickFab: undefined,
  onClose: undefined,
  onClickDelete: undefined,
};

export default withStyles(styles)(Category);
