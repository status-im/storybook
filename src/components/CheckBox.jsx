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

class CustomCheckBox extends React.Component {
  state = {
    checked: true
  }

  handleChange = name => event => {
    this.setState({ checked: event.target.checked })
  }

  render() {
    const { classes } = this.props;

    return (
      <Checkbox
        checked={this.state.checked}
        onChange={this.handleChange('checkedA')}
        value="checkbox"
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
      />
    )
  }
}

export default withStyles(styles)(CustomCheckBox);
