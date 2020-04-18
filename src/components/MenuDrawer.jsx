import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Drawer,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuList from './MenuList';

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

export default function MenuDrawer(props) {
  const {
    handleDrawerClose,
    open,
  } = props;
  const classes = useStyles();
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
      <MenuList />
    </Drawer>
  );
}

MenuDrawer.propTypes = {
  handleDrawerClose: PropTypes.func,
  open: PropTypes.bool,
};

MenuDrawer.defaultProps = {
  handleDrawerClose: undefined,
  open: false,
};
