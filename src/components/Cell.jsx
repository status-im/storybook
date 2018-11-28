import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'

const styles = {
  dense: {
    padding: 0,
    backgroundColor: 'white'
  },
  root: {
    padding: '5px',
    backgroundColor: 'white'
  },
  alignRight: {
    textAlign: 'right',
    paddingRight: '10px'
  },
  avatar: {
    margin: 10
  },
  icon: {
    margin: 0,
    marginRight: '5px',
    fontSize: '15px'
  }
}

function Title({classes, primaryText, icon}) {
  return (
    <ListItem dense={true} classes={{root: classes.dense}} color="white">
      <ListItemIcon classes={{root: classes.icon}}>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText classes={{root: classes.dense}}
        primary={primaryText}
      />
    </ListItem>
  )
}

function Cell({
  classes, small, imageUrl, primaryText, secondaryText, accessoryText, secondComponent
}) {
  return (
    <ListItem classes={{root: small ? classes.dense : classes.root }} color="white" dense={small}>
      {
        imageUrl
          ? <ListItemAvatar><Avatar alt="Remy Sharp" src={imageUrl} className={classes.avatar} /></ListItemAvatar>
          : null
      }
      <ListItemText primary={<Title classes={classes} primaryText={primaryText} />} secondary={secondaryText} />
      <ListItemText classes={{root: classes.alignRight}} secondary={accessoryText} />
      { secondComponent }

    </ListItem>
  )
}

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Cell, Title)