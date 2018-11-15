import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'

const styles = {
  root: {
    color: '#edf2f5',
    backGroundColor: '#edf2f5',
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

export default withStyles(styles)(CustomCheckBox);
