import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  default: {
    backgroundColor: '#4360df'
  },
  large: {
    height: '50px',
    widht: '50px'
  },
  normal: {
    height: '25px',
    widht: '25px'
  }
}

function CustomizedBadge(props) {
  const { classes, count,  large, customSize, children } = props
  const size = large ? classes.large : classes.normal
  console.log(size)

  return (
    <IconButton aria-label="Cart">
      <Badge badgeContent={count} color="primary" className={ badge: classes.badgen }} />
    </IconButton>
  )
}

CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
}

export default withStyles(styles)(CustomizedBadge);