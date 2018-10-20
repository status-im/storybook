import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    flexGrow: 1,
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1,
    textDecoration: 'none'
  },
  avatar: {
    margin: 10,
  },
  menuButton: {
    marginLeft: -12
  },
  badge: {
    top: 1,
    right: -15
  },
};

function Chatbar({
  classes, prymary, name, description, style, handlePreviousClick, menu, handleMenuClick, unreadMessages, ...props
}) {
  const avatarUrl = 'https://avatars0.githubusercontent.com/u/18357049?s=400&u=efc262623265b5b527a8570faa590f9f29ae36d5&v=4'

  const backGroundColor = prymary ? '#4360DF' : 'white'
  const childrenColor = prymary ? 'white' : 'black'

  const descriptionTypography = () => (
    description
      ? (
          <Typography variant="subheading" style={{ color: childrenColor }}>
            {description}
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

  const renderBadge = () => (
    <Badge badgeContent={unreadMessages} color="primary" classes={{ badge: classes.badge }}>
      <ChevronLeft />
    </Badge>
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
          {
            unreadMessages !== 0
            ? renderBadge()
            : ( <ChevronLeft /> )
          }
        </IconButton>
        <Avatar alt="Remy Sharp" src={avatarUrl} className={classes.avatar} />
        <div align="left" className={classes.grow}>
          <Typography variant="title" style={{ color: childrenColor }}>
            {name}
          </Typography>
          { descriptionTypography() }
        </div>
        { menuIcon() }
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Chatbar);
