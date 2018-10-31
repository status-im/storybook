import React, { Component } from 'react'
import BottomSheet from './BottomSheet'
import BottomSheetItem from '../components/BottomSheetItem'
import Button from '../components/desktop/Button'
import AddIcon from '@material-ui/icons/Add'
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';

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
            contentStyle={{margin: '10px'}}
        >
          <BottomSheetItem
            handleOnClick={this.handleBottomOpen.bind(this)}
            icon={<AddIcon />}
            content="Add to contacts"
          />
          <BottomSheetItem
            handleOnClick={this.handleBottomOpen.bind(this)}
            content="Add to contacts"
            icon={<AlbumOutlinedIcon />}
            error
          />
        </BottomSheet>
      </div>
    )
  }
}

export default BottomSheetExample
