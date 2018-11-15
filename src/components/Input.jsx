import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 6,
    backgroundColor: '#edf2f5',
    fontSize: 16,
    padding: '10px 12px'
  },
  formLabel: {
    fontSize: 18,
    color: 'black'
  },
})

const renderLabel = (formLabelClass, idFor, label) => (
  <InputLabel
    shrink
    htmlFor={idFor}
    className={formLabelClass}
    focused={false}
  >
    {label}
  </InputLabel>
)

function Input({ classes, idFor, label, placeholder, handleInputField }) {
  const labelForm = label ? renderLabel(classes.formLabel, idFor, label) : null
  return (
    <FormControl className={classes.margin}>
      { labelForm }
      <InputBase
        id={idFor}
        placeholder={placeholder}
        onChange={(e) => handleInputField(e)}
        classes={{
          root: classes.root,
          input: classes.input,
        }}
      />
    </FormControl>
  )
}

Input.defaultProps = {
  label: '',
  placeholder: ''
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  idFor: PropTypes.string.isRequired,
  handleInputField: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default withStyles(styles)(Input)