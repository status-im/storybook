import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'

const styles = {
  root: {
    '&$checked': {
      color: '#4360DF',
    },
  },
  checked: {},
};

function CustomCheckBox({ classes, checked, handleCheckClick, disabled, style }) {
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => handleCheckClick(e)}
      value="checkbox"
      disabled={disabled}
      style={{...style}}
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  )
}

CustomCheckBox.defaultProps = {
  disabled: false,
  handleCheckClick: () => {},
  style: {}
}

CustomCheckBox.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  handleCheckClick: PropTypes.func,
  style: PropTypes.shape
}

export default withStyles(styles)(CustomCheckBox);
