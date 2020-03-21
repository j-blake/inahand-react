import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

import useLogout from './hooks/logout/useLogout';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  link: {
    color: 'inherit',
    'text-decoration': 'none',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
}));

export default function AppBar(props) {
  const {
    open,
    handleDrawerOpen,
  } = props;
  const classes = useStyles();
  const logout = useLogout();
  return (
    <MaterialAppBar
      position="absolute"
      className={classNames(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar disableGutters={!open} className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(
            classes.menuButton,
            open && classes.menuButtonHidden,
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          <Link to="/" className={classNames(classes.link)}>
            Inahand
          </Link>
        </Typography>
        <IconButton
          color="inherit"
          aria-label="Logout"
          onClick={() => logout()}
        >
          <ExitIcon />
          <Typography
            component="span"
            variant="subtitle2"
            color="inherit"
            noWrap
          >
            LOGOUT
          </Typography>
        </IconButton>
      </Toolbar>
    </MaterialAppBar>
  );
}

AppBar.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
};

AppBar.defaultProps = {
  open: false,
  handleDrawerOpen: undefined,
};
