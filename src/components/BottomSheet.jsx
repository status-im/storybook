import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';

class BottomSheet extends Component {
  getStyles () {
    const {
      open
    } = this.props

    return {
      root: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: '100%',
        left: 0,
        pointerEvents: open ? null : 'none',
        opacity: open ? '1' : '0',
        transition: 'visibility 0s .5s, opacity .5s linear',
        position: 'fixed',
        right: 0,
        top: '0',
        width: '100%',
        zIndex: 1300
      },
      body: {
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        bottom: 0,
        transform: open ? 'translateY(-100%)' : 'none',
        transition: 'all .3s ease 0s',
        top: '100%',
        minHeight: '40%',
        maxHeight: '40%',
        overflowY: 'auto',
        position: 'fixed',
        width: '100%'
      },
      action: {
        position: 'absolute',
        right: 16,
        top: -28
      },
      contentStyle: {
        display: 'inline-grid',
        width: '95%'
      }
    }
  }

  handleClickOverlay = (e) => {
    e.preventDefault()
    this.props.onRequestClose()
  }

  render () {
    const styles = this.getStyles()

    return (
      <div
        style={{
          ...styles.root,
          ...this.props.style
        }}
        onClick={this.handleClickOverlay}
      >
        <Paper
          style={{
            ...styles.body,
            ...this.props.bodyStyle
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ ...this.props.contentStyle, ...styles.contentStyle }}>
            {this.props.children}
          </div>
        </Paper>
      </div>
    )
  }
}

BottomSheet.defaultProps = {
  open: null
}

BottomSheet.propTypes = {
  /** Override the inline-styles of the body element. */
  bodyStyle: PropTypes.object,
  /** Override the inline-styles of the content element. */
  contentStyle: PropTypes.object,
  /** Fired when the the background is clicked. */
  onRequestClose: PropTypes.func.isRequired,
  /** Controls whether the bottom sheet is opened or not. */
  open: PropTypes.bool,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object,
}

export default BottomSheet
