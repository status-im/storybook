import React, { Component } from 'react'
import BottomSheet from './BottomSheet'
import BottomSheetItem from '../components/BottomSheetItem'
import Button from '../components/desktop/Button'

class BottomSheetExample extends Component {
  state = {
    open: false
  }

  handleBottomOpen = () => {
    const { open } = this.state

    this.setState({
      open: !open
    })
  }

  render() {
    const { open } = this.state


    return(
      <div>
        <Button
          active
          onClick={this.handleBottomOpen.bind(this)}
          text="Click to show BottomSheet"
        />
        <BottomSheet
            onRequestClose={() => this.handleBottomOpen()}
            open={open}
        >
          <BottomSheetItem
            handleAddClick={this.handleBottomOpen.bind(this)}
            style={{ margin: '5px' }}
            content="Add to contacts"
          />
          <BottomSheetItem
            handleAddClick={this.handleBottomOpen.bind(this)}
            style={{ margin: '5px' }}
            content="Add to contacts"
            error
          />
        </BottomSheet>
      </div>
    )
  }
}

export default BottomSheetExample
