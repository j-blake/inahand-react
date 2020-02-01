import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {
  Paper, List, Grid, Fab, Button, withStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import AddAccountModal from './AddAccountModal';

const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {},
});

const AccountList = ({
  classes,
  accounts,
  receivedAt,
  isModalOpen,
  refreshAccounts,
  onClickFab,
  onClose,
}) => (
  <div>
    <Grid container>
      <Grid item>
        <Typography variant="h4">
          Accounts&nbsp;
          <Button onClick={refreshAccounts} className={classes.button} size="small">
            <RefreshIcon />
          </Button>
        </Typography>
        <Typography variant="caption">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          (updated {receivedAt})
        </Typography>
      </Grid>
    </Grid>
    <List className={classes.root}>
      {accounts.map(account => (
        // eslint-disable-next-line no-underscore-dangle
        <Paper key={account._id} className={classes.paper}>
          <Grid container alignContent="space-between">
            <Grid item xs={6}>
              <Typography variant="body1">{account.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right" variant="body1">
                {Number.isFinite(account.currentBalance)
                  ? `$${Number.parseFloat(account.currentBalance)
                    .toFixed(2)
                    .toString()}`
                  : 'N/A'}
              </Typography>
            </Grid>
          </Grid>
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
    <AddAccountModal
      open={isModalOpen}
      onClose={onClose}
    />
  </div>
);

AccountList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object),
  receivedAt: PropTypes.string,
  isModalOpen: PropTypes.bool,
  refreshAccounts: PropTypes.func.isRequired,
  onClickFab: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

AccountList.defaultProps = {
  accounts: [],
  receivedAt: '',
  isModalOpen: false,
};

export default withStyles(styles)(AccountList);
