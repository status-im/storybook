import React, { Component } from 'react'
import BottomSheet from './BottomSheet'
import Typography from '@material-ui/core/Typography'
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
          <Button
            active
            onClick={this.handleBottomOpen.bind(this)}
            text="example item1"
            style={{ margin: '5px' }}
          />
          <Button
            active
            onClick={this.handleBottomOpen.bind(this)}
            text="example item2"
            style={{ margin: '5px' }}
          />
          <Button
            active
            onClick={this.handleBottomOpen.bind(this)}
            text="example item3"
            style={{ margin: '5px' }}
          />
          <Button
            active
            onClick={this.handleBottomOpen.bind(this)}
            text="Click in any to close"
            style={{ margin: '5px' }}
          />
        </BottomSheet>
      </div>
    )
  }
}

export default BottomSheetExample
