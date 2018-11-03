import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import BottomSheet from './BottomSheet'
import BottomSheetItem from '../components/BottomSheetItem'

class BottomSheetExample extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      open
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleDrawer(true)}>Open Bottom</Button>
        <BottomSheet
          open={this.state.open}
          toggleDrawer={() => this.toggleDrawer()}
        >
          <BottomSheetItem
            handleOnClick={() => {}}
            content="Your content here"
            icon={<AddIcon />}
          />
        </BottomSheet>
      </div>
    );
  }
}

export default BottomSheetExample;
