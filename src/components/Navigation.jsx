import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textDecoration: 'none'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
};

function Navigation({ classes, title, details, style, ...props }) {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" {...props}>
            <ChevronLeft />
          </IconButton>
          <Typography align="center" className={classes.grow} style={{ marginTop: 10 }}>
            <Typography variant="title" >
              {title}
            </Typography>
            <Typography variant="subheading" style={{ fontSize: 'small', fontWeight: 300 }}>
              {details}
            </Typography>
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" {...props}>
            <MoreHoriz />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navigation);
