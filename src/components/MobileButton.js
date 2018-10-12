import React, { Fragment } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Button from '@material-ui/core/Button';

const PRIMARY_BLUE = '#4360DF'
const styles = theme => ({
  button: {
    borderRadius: '8px'
  }
});
const colors = { primary: PRIMARY_BLUE, secondary: '#4360DF' };
const backgroundColors = { primary: 'rgba(67, 96, 223, 0.1)' };
const buttonText = { color: '#4360df', margin: '0 20px', fontWeight: 300 };
const MobileButton = ({ classes, text, type, buttonType, style, ...props }) => (
  <Fragment>
    <Button type={type} size="large" className={classNames(classes.button)} style={{ ...style, backgroundColor: backgroundColors[buttonType] || '' }} {...props} >
      {buttonType === 'previous' && <ArrowLeft style={{ color: PRIMARY_BLUE }}/>}
      <div style={{ ...buttonText, color: PRIMARY_BLUE }}>{text}</div>
      {buttonType === 'next' && <ArrowRight style={{ color: PRIMARY_BLUE }}/>}
    </Button>
  </Fragment>
);

export default withStyles(styles)(MobileButton);
