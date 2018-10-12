import React, { Fragment } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    borderRadius: '22px',
    backgroundColor: '#4360DF',
    '&:hover': {
      background: '#4360DF'
    },
    boxShadow: '0px 2px 4px rgba(43, 59, 71, 0.124066)'
  }
});
const MobileButton = ({ classes, text, type, style, active, ...props }) => (
  <Fragment>
    <Button
      type={type}
      size="large"
      className={classNames(classes.button)}
      style={{ backgroundColor: active ? '#4360DF' : 'white', ...style }}
      {...props} >
      {active && <Check style={{ color: 'white' }} />}
      <div style={{ color: active ? 'white' : '#4360DF', margin: '0 20px', fontWeight: 300 }}>{text}</div>
    </Button>
  </Fragment>
);

export default withStyles(styles)(MobileButton);
