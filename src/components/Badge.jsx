import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  normal: {
    backgroundColor: '#4360DF',
    left: '0px',
    height: '20px',
    width: '20px'
  },
  large: {
    backgroundColor: '#4360DF',
    left: '0px',
    height: '25px',
    width: '25px'
  }
}

function CustomizedBadge({ classes, count,  large }) {
  return (
    <IconButton aria-label="Cart">
      <Badge badgeContent={count} color="primary" classes={{ badge: large ? classes.large : classes.normal }} />
    </IconButton>
  )
}

CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
}

export default withStyles(styles)(CustomizedBadge)