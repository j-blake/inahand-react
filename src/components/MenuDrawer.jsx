import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Drawer,
  IconButton,
  Divider,
  List,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { mainListItems, secondaryListItems } from './listItems';

export default function MenuDrawer(props) {
  const {
    classes,
    handleDrawerClose,
    open,
  } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !open && classes.drawerPaperClose,
        ),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
}

MenuDrawer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func,
  open: PropTypes.bool,
};

MenuDrawer.defaultProps = {
  handleDrawerClose: undefined,
  open: false,
};
