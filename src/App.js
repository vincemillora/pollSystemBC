import React, { Component } from 'react';
import Header from './Components/Header'
import CreatePoll from './Components/CreatePoll';
import SelectedPoll from './Components/SelectedPoll';
import Web3 from 'web3'
import contract from './Contract Reference/PollReference';


class App extends Component {

  constructor(){
    super();

    //This handles the states of Create & Search Poll components.
    this.state = {
      selectedId: 0,
      createSelected: true,
      pollSelected: false
    }

    //Initializes the Web3 connection instance.
    if(typeof window.web3 != 'undefined'){
      console.log("Using web3 detected from external source like Metamask");
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.web3 = new Web3(new 
      Web3.providers.HttpProvider("http://localhost:8545"));
    }

    //Sets the account, for it to be recognized by Metamask 
    window.web3.eth.defaultAccount = window.web3.eth.accounts[0]

    //Sets the contract connection for the instance.
    const MyContract = window.web3.eth.contract(contract.ABI);
    this.state.ContractInstance = MyContract.at(contract.address);
    
  }
  

  //Handler of click event for Search Poll
  handleSelectedPoll(id){
    this.setState({selectedId: id})
    this.setState({createSelected: false})
    this.setState({pollSelected: true})
  }

  //Handler of click event for Create Poll
  handleCreatePoll(id){
    this.setState({createSelected: true})
    this.setState({pollSelected: false})
  }

  render() {

    
    let renderPoll;
    let renderCreate;

    //Listens to state changes whether or not the Search Poll should be displayed.
    if(this.state.selectedId !== 0 && this.state.pollSelected === true){
      renderPoll = <SelectedPoll sid={this.state.selectedId} contractInstance = {this.state.ContractInstance}/>;
    }
    else {
      renderPoll = '';
    }

    //Listens to state changes whether or not the Create Poll should be displayed.
    if(this.state.createSelected === true){
      renderCreate = <CreatePoll contractInstance = {this.state.ContractInstance}/>;
    }
    else{
      renderCreate ='';
    }
    
    return (
      <div className="App">
        <Header handleCreate = {this.handleCreatePoll.bind(this)} handleSelected = {this.handleSelectedPoll.bind(this)}/><br/>
        {renderPoll}
        {renderCreate}
      </div>
    );
  }
}

export default App;
