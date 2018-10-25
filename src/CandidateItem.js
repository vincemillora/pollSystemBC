import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';

class CandidateItem extends Component {

    //Handles the click event for voting a candidate and serves
    //as a callback to the Selected Poll component.
    handleVote(id){
        this.props.onVoteCandidate(id);
    }
    render() {
        return (
            <div className="CandidateItem">
                <tr>
                    <th width="5%"><button class="btn-floating btn-small waves-effect waves-light red left" onClick={this.handleVote.bind(this, this.props.candidate.id)}>Vote</button></th>
                    <th><Progress theme={{active: {color: '#ff5722', symbol: this.props.candidate.candidateName}, default: {symbol: this.props.candidate.candidateName}, success: {symbol: this.props.candidate.candidateName}}} percent={this.props.candidate.numberOfVotes}/></th>
                </tr>
            </div>
            
        );
  }
}

export default CandidateItem;
