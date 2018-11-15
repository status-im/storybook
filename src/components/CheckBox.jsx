import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'

const styles = {
  root: {
    color: '#edf2f5',
    '&$checked': {
      color: '#4360DF',
    },
  },
  checked: {},
};

function CustomCheckBox({ classes, checked, handleCheckClick, disabled }) {
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => handleCheckClick(e)}
      value="checkbox"
      disabled={disabled}
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  )
}

CustomCheckBox.defaultProps = {
  disabled: false,
  handleCheckClick: () => {}
}

CustomCheckBox.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  handleCheckClick: PropTypes.func
}

export default withStyles(styles)(CustomCheckBox);
