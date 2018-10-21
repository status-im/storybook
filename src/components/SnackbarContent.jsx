import React from 'react';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  variant: {
    backgroundColor: 'white',
    boxShadow: 'none'
  },
  icon: {
    fontSize: 20,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  grow: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#4360DF'
  },
  menuButton: {
    color: '#4360DF'
  },
};

function SnackbarContentWrapper(props) {
  const { classes, onClose, handleButtonClick, ...other } = props;

  return (
    <SnackbarContent
      className={classes.variant}
      classes={{ message: classes.message }}
      aria-describedby="snackbar"
      message={
        <Button
          className={classes.menuButton}
          size="large"
          onClick={(e) => handleButtonClick(e)}
        >
          <AddIcon className={classes.icon} />
          <Typography className={classes.grow}>
            Add to contacts
          </Typography>
        </Button>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

export default withStyles(styles)(SnackbarContentWrapper);
