import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'

const styles = {
  paperAnchorBottom: {
    minHeight: '40%',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}

class BottomSheet extends React.Component {
  render() {
    const { classes, open, toggleDrawer } = this.props;

    return (
      <SwipeableDrawer
        classes={{
          paperAnchorBottom: classNames(classes.paperAnchorBottom),
        }}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List className={classes.fullList}>
            {this.props.children}
          </List>
        </div>
      </SwipeableDrawer>
    );
  }
}

BottomSheet.propTypes = {
  classes: PropTypes.object,
  toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(BottomSheet);
