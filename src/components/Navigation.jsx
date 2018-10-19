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
    flexGrow: 1,
    boxShadow: 'none'
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

function Navigation({
  classes, prymary, title, details, style, handlePreviousClick, menu, handleMenuClick, ...props
}) {
  const backGroundColor = prymary ? '#4360DF' : 'white'
  const childrenColor = prymary ? 'white' : 'black'

  const detailsTypography = () => (
    details
      ? (
          <Typography variant="subheading" style={{ color: childrenColor }}>
            {details}
          </Typography>
        )
      : false
  )

  const menuIcon = () => (
    menu
      ? (
          <IconButton
            className={classes.menuButton}
            onClick={(e) => handleMenuClick(e)}
            style={{ color: childrenColor }}
          >
            <MoreHoriz />
          </IconButton>
        )
      : false
  )

  return (
    <AppBar
      position="static"
      className={classes.root}
      style={{ backgroundColor: backGroundColor, ...style }}
    >
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          onClick={(e) => handlePreviousClick(e)}
          style={{ color: childrenColor }}
        >
          <ChevronLeft />
        </IconButton>
        <div align="center" className={classes.grow}>
          <Typography variant="title" style={{ color: childrenColor }}>
            {title}
          </Typography>
          { detailsTypography() }
        </div>
        { menuIcon() }
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navigation);
