import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    margin: '8px',
    cursor: 'pointer',
    '&:hover': {
      background: '#EDEBFC;',
      borderRadius: '20px'
    }
  },
  textPrimary: {
    color: '#4360DF',
    fontSize: '17px'
  },
  textError: {
    color: '#f53a3a',
    fontSize: '17px'
  },
  buttonPrimary: {
    color: '#4360DF',
    background: '#EDEBFC;',
    marginRight: '8px'
  },
  buttonError: {
    color: '#f53a3a',
    background: '#df434326',
    marginRight: '8px'
  }
});

function BottomSheetItem({ classes, content, error, icon, handleOnClick, type, href, style, ...props }) {
  return (
    <a
      className={classes.root}
      onClick={(e) => {handleOnClick(e)}}
    >
      <IconButton
        key="add"
        aria-label="Add"
        className={error ? classes.buttonError : classes.buttonPrimary}
      >
        {icon}
      </IconButton>
      <Typography className={error ? classes.textError : classes.textPrimary}>
        {content}
      </Typography>
    </a>
  )
}

export default withStyles(styles)(BottomSheetItem);
