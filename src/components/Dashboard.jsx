import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from './styles';
import AppBar from './AppBar';
import MenuDrawer from './MenuDrawer';
import Main from './Main';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            classes={classes}
            handleDrawerOpen={this.handleDrawerOpen}
            open={open}
          />
          <MenuDrawer
            classes={classes}
            handleDrawerClose={this.handleDrawerClose}
            open={open}
          />
          <Main classes={classes} />
        </div>
      </BrowserRouter>
    );
  }
}

Dashboard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
