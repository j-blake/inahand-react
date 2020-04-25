import React from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';

export default function MenuList() {
  return (
    <>
      <Divider />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/accounts">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>
        <ListItem button component={Link} to="/transactions">
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/categories">
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </>
  );
}
