import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography, makeStyles,
} from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

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

export default function CategoryHeader(props) {
  const { onClickBack, previousId, parentName } = props;
  const classes = useStyles();
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
    </>
  );
}

CategoryHeader.propTypes = {
  previousId: PropTypes.string,
  parentName: PropTypes.string,
  onClickBack: PropTypes.func,
};

CategoryHeader.defaultProps = {
  previousId: undefined,
  parentName: undefined,
  onClickBack: undefined,
};
