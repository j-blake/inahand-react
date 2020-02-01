import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  withStyles,
} from '@material-ui/core';
import classNames from 'classnames';

import CategoryService from './CategoryService';

const styles = theme => ({
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
});

class AddCategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleAddCategory = (e) => {
    e.preventDefault();
    CategoryService.addNewCategory({ ...this.state, ...this.props });
  }

  render() {
    const { classes } = this.props;
    const { categoryName } = this.state;
    return (
      <div>
        <TextField
          label="Category Name"
          id="category-name"
          name="categoryName"
          className={classNames(classes.margin, classes.textField)}
          value={categoryName}
          onChange={this.handleChange}
        />
        <div>
          <Button
            color="default"
            className={classes.button}
            onClick={this.handleAddCategory}
          >
            Add Category
          </Button>
        </div>
      </div>
    );
  }
}

AddCategoryForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCategoryForm);
