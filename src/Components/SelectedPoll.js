import React, { Component } from 'react';
import CandidateItem from './CandidateItem'
import moment from 'moment';

class SelectedPoll extends Component {
  
    constructor(){
        super();
        this.state = {
            pollIndex: 0,
            title: '',
            desc: '',
            startDate: 0,
            endDate: 0,
            numberOfCandidates: 0,
            isOwner: false,
            candidates: []
        }
        
    }

    componentWillReceiveProps(props){
        this.updateState(props.sid)
    }

    updateState(newValue){

        let value;
        
        if(newValue > 0) value = newValue;
        else value = this.props.sid;
        
        this.setState({pollIndex: value},() => 
        {
            this.props.contractInstance.getPollDetails(value,
            {
                gas: 300000
            }, (err, result) => {
                    this.setState({
                    title: result[0],
                    desc: result[1],
                    startDate: result[2].c[0],
                    endDate: result[3].c[0],
                    }, ()=> {
                        this.props.contractInstance.getNumberOfCandidates(value,
                        {
                            gas: 300000
                        }, (err, result) => {
                            this.setState({
                                numberOfCandidates: result.c[0]  
                            }, ()=> {
                                this.setState({candidates: []},()=>{
                                    for(let i=1; i<=this.state.numberOfCandidates; i++ ){
                                        let candName;
                                        this.props.contractInstance.getCandidateName(value, i,
                                            {gas: 300000}, (err, result) => {
                                                candName = result;
                                                
                                                this.props.contractInstance.getNumberOfVotes(value, i,
                                                    {gas: 300000},(err, result) => {
                                                        let currentCandidates = this.state.candidates
                                                        currentCandidates.push({
                                                            id: i,
                                                            candidateName: candName,
                                                            numberOfVotes: result.c[0]
                                                        })   

                                                        this.setState({candidates:currentCandidates});
                                                    }
                                                )
                                            }
                                        ); 
                                    }    
                                })
                                
                                this.props.contractInstance.checkIfOwner(value,
                                    {gas: 300000}, (err, result) => {
                                        this.setState({
                                            isOwner:  result
                                        });
                                    }
                                );
                            }); 
                        });
                    }
                );
            });
        });
    }

    componentDidMount(){
        this.updateState();
    }

   
    onVoteCandidate(id){
        this.props.contractInstance.vote(this.state.pollIndex, id,
            {gas:300000},(err,result) => {console.log(result);})
    }

    handleAddCandidate(e){
        e.preventDefault();
        this.props.contractInstance.createPollCandidate(this.refs.name.value, this.state.pollIndex
        ,{gas: 300000
        }, (err, result) => {console.log(result);})
      
    }



    render() {

    let candidateItems;
    if(this.state.candidates){
        candidateItems = this.state.candidates.map(candidate => {
            return (
                <CandidateItem onVoteCandidate={this.onVoteCandidate.bind(this)} key={candidate.id} candidate = {candidate}/>
            );
        });
    }

    let deadline;
    if(this.state.endDate < parseInt(moment().format("YYYYMMDD"))){
        deadline = <i>The poll is finished. Here's the final results:</i>
    }
    else{
        deadline = <i>The poll is still going, keep voting!</i>
    }

    return (
        <div className="body">
          <div>
            <h1 className="title">{this.state.title}</h1>
            <p className="date">{this.state.startDate} - {this.state.endDate}</p>
            <p className="description">{this.state.desc}</p>
            <div class="divider"></div>
          </div>
          <div className="pollArea">
              <form onSubmit={this.handleAddCandidate.bind(this)}>
                  <div className="left dL">{deadline}</div>
                  <button class="btn right green waves-effect waves-light" value="Add" type="submit">Add
                      <i class="material-icons right">add</i>
                  </button>
                  <div class="input-field-active inline right">
                      <input className="_addInput" type="text" ref="name" placeholder="Add Candidate"/>
                  </div><br/>
              </form>
              <div className="candidateArea">                  
                    <table>
                      {candidateItems}
                    </table>
              </div>
          </div>
          
        </div>
      );
  }
}

export default SelectedPoll;
