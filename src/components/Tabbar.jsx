import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import Mood from '@material-ui/icons/Mood';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Tabbar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="white"
          textColor="primary"
          centered
        >
          <Tab label="Home" icon={<AlbumOutlinedIcon />} />
          <Tab label="Wallet" icon={<AccountBalanceWalletOutlinedIcon />} />
          <Tab label="Profile" icon={<Mood />} />
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(Tabbar);
