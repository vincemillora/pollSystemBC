pragma solidity ^0.4.25;

// This is a contract for a simple poll Dapp.
// Users can create a poll and vote.
contract PollSystem {
  
  // This is the data structure of the poll.
  struct Poll {
    string title;
    string description;
    uint dateCreated;
    uint endDate;
    address pollCreator;
    uint numberOfPollCandidates;

    mapping (uint => PollCandidate) pollCandidates; // storage for different candidates in the poll.
    mapping (address => bool) alreadyVoted; // storage for the users who already voted.
  }

  // This is the data structure of the poll candidate.
  struct PollCandidate {
    string candidate;
    uint numberOfVotes;
  }
  
  mapping (uint => Poll) private polls; // storage for the polls
  uint private numberOfPolls;
  address private contractOwner;

  constructor () public {
    contractOwner=msg.sender;  
  }

  /* 
   * @details: Function for creating a poll.
   * @params: _title (title of the poll), _description (description about the poll)
   *          _dateCreated (the date when the poll is create), _endDate (date when the poll will end)
   */
  function createPoll(string _title, string _description, uint _dateCreated, uint _endDate) public {
    numberOfPolls++;
    polls[numberOfPolls]=Poll(_title, _description, _dateCreated, _endDate, msg.sender, 0);
  }

  /* 
   * @details: Create a candidate for a specific poll.
   * @params: _candidate (name of the candidate), pollIndex (the id of the poll where we add the candidate)
   */
  function createPollCandidate(string _candidate, uint pollIndex) public {
    require (polls[pollIndex].pollCreator==msg.sender);
    polls[pollIndex].numberOfPollCandidates++;
    polls[pollIndex].pollCandidates[polls[pollIndex].numberOfPollCandidates]=PollCandidate(_candidate, 0);
  }

  /* 
   * @details: Vote a candidate in a specific a poll.
   * @params: pollIndex (the id of the poll where we vote), CandidateIndex (id of the candidate) 
   */
  function vote(uint pollIndex, uint candidateIndex) public {
    require (polls[pollIndex].alreadyVoted[msg.sender]!=true);
    polls[pollIndex].pollCandidates[candidateIndex].numberOfVotes++;
    polls[pollIndex].alreadyVoted[msg.sender]=true;
  }

  /* 
   * @details: Get the number of votes of a candidate from a specific poll.
   * @params: pollIndex (the id of the poll), CandidateIndex (id of the candidate)
   * @return: uint (contains the number of votes of a candidate)
   */
  function getNumberOfVotes(uint pollIndex, uint candidateIndex) external constant returns (uint){
    return polls[pollIndex].pollCandidates[candidateIndex].numberOfVotes;
  }

  /* 
   * @details: Get the name of a candidate from a specific poll.
   * @params: pollIndex (the id of the poll), CandidateIndex (id of the candidate)
   * @return: string (contains the name of a candidate)
   */
  function getCandidateName(uint pollIndex, uint candidateIndex) external constant returns (string){
    return polls[pollIndex].pollCandidates[candidateIndex].candidate;
  }

  /* 
   * @details: Get the number of candidates in a specific poll.
   * @params: pollIndex (the id of the poll)
   * @return: uint (contains the number of candidates)
   */
  function getNumberOfCandidates(uint pollIndex) external constant returns (uint) {
    return polls[pollIndex].numberOfPollCandidates;
  }
  
  /* 
   * @details: Check if the user is the owner of the poll.
   * @params: pollIndex (the id of the poll)
   * @return: boolean (true if the user is the owner, else false)
   */
  function checkIfOwner(uint pollIndex) external constant returns (uint) {
    if(polls[pollIndex].pollCreator==msg.creator)
      return true;
    else
      return false;
  }
  
  /* 
   * @details: Get the details of a specific poll.
   * @params: pollIndex (the id of the poll)
   * @return: uint (contains the number of candidates)
   */
  function getPollDetails(uint pollIndex) external constant returns (string _title, string _description, uint _dateCreated, uint _endDate) {
    return (polls[pollIndex].title, polls[pollIndex].description, polls[pollIndex].dateCreated, polls[pollIndex].endDate);
  }
}