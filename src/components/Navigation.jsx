import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textDecoration: 'none'
  },
  menuButton: {
    marginLeft: -12
  },
};

function Navigation({ classes, type, href, style, ...props }) {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <Button
            className={classes.menuButton}
            type={type}
            {...props}
          >
            <ChevronLeft />
          </Button>
          <a href={href} className={classes.grow}>
            <Typography variant="h6">
              Other account
            </Typography>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navigation);
