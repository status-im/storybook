import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import styled, { css } from 'styled-components'
import web3 from 'web3';

const Progress = styled.div`
  color: #000000;
  box-sizing: initial;
  color: #fff;
  font-size: 11px;
  font-size: 0.6875rem;
  height: 12px;
  line-height: 1.182;
  margin: 6px 0;
  position: relative;
  text-align: left;
  width: 100%;
  margin-top: .7rem;
  background: url(${props => props.show ? '../images/arrow-down.svg' : '../images/arrow-up.svg'}) no-repeat center right;
`;
const ProgressLarge = styled(Progress)`
font-size: 16px;
font-size: 1rem;
height: 25px;
line-height: 1.7;
`

const ProgressBar = styled.span`
  background-color: #ECEFFC;
  display: block;
  height: 100%;
  position: relative;
  width: auto;
  min-width: 5px;
  max-width: 89%;
  padding: 5px 0 5px 20px;
  border-radius: 8px;
  white-space: nowrap;
`

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
      <div>
        <ProgressLarge show={show}>
          <ProgressBar style={{width: votePercentage +'%'}}>
            <Typography gutterBottom component="h2" onClick={this.showDetails}><span>{votePercentage}%</span> {title}</Typography>
          </ProgressBar>
        </ProgressLarge>
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
