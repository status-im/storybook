import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
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
    '&:hover': {
      background: '#4360df26'
    },
  },
  buttonError: {
    color: '#f53a3a',
    '&:hover': {
      background: '#df434326'
    },
  }
});

function BottomSheetItem({ classes, content, error, handleAddClick, type, href, style, ...props }) {
  return (
    <div className={classes.root}>
      <IconButton
        key="add"
        aria-label="Add"
        className={error ? classes.buttonError : classes.buttonPrimary}
        onClick={(e) => {handleAddClick(e)}}
      >
        <AddIcon />
      </IconButton>
      <Typography className={error ? classes.textError : classes.textPrimary}>
        {content}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(BottomSheetItem);
