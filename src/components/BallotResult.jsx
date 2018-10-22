import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import web3 from 'web3';

class BallotResult extends PureComponent {

  state = {
    show: false
  }

  showDetails = () => {
    const show = this.state.show;
    this.setState({ show: !show });
  }

  render(){
    const { title, quadraticVotes, tokenTotal, totalVotes } = this.props;
    const { show } = this.state;

    const votePercentage = totalVotes > 0 ? parseInt(quadraticVotes) / totalVotes * 100 : 0;

    return (
      <div className="ballotResult">
        <div className={show ? 'collapse progress progress-large' : 'progress progress-large'}>
          <span style={{width: votePercentage +'%'}}>
            <Typography gutterBottom component="h2" onClick={this.showDetails}><span>{votePercentage}%</span> {title}</Typography>
          </span>
        </div>
        {show && <ul>
          <Typography component="li">Voters: <span>N/A</span></Typography>
          <Typography component="li">Total votes: <span>{quadraticVotes}</span></Typography>
          <Typography component="li" className="noBorder">Total SNT: <span>{web3.utils.fromWei(tokenTotal.toString(), "ether")}</span></Typography>
        </ul>}
      </div>
    );
  }
}

export default BallotResult;
