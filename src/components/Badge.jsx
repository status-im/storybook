import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  normal: {
    backgroundColor: '#4360DF',
    position: 'initial',
    left: '0px',
    height: '20px',
    width: '20px'
  },
  large: {
    backgroundColor: '#4360DF',
    position: 'initial',
    left: '0px',
    height: '25px',
    width: '25px'
  }
}

function CustomizedBadge({ classes, count,  large, children, style }) {
  return (
    <Badge
      badgeContent={count > 9 ? '9+' : count }
      color="primary"
      children={children}
      style={{...style}}
      classes={{ badge: large ? classes.large : classes.normal }}
    >
    </Badge>
  )
}

CustomizedBadge.defaultProps = {
  children: <div/>,
  style: {}
}


CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  children: PropTypes.node,
  style: PropTypes.shape
}

export default withStyles(styles)(CustomizedBadge)
