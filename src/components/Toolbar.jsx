import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronRight from '@material-ui/icons/ChevronRight';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#4360DF'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#4360DF'
  },
};

function Bar({ classes, type, href, style, ...props }) {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <a href={href} className={classes.grow}>
            <Typography variant="h6">
              Other account
            </Typography>
          </a>
          <Button
            className={classes.menuButton}
            type={type}
            size="large"
            {...props}
          >
            <Typography variant="h6" className={classes.grow}>
              Next
            </Typography>
            <ChevronRight />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Bar);
