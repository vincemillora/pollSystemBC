var contract = {
    address: "0x679e3534fb96c5b8ff2a3d8769262c7f7817bf01",
    ABI: [
        {
          "constant": false,
          "inputs": [
            {
              "name": "_title",
              "type": "string"
            },
            {
              "name": "_description",
              "type": "string"
            },
            {
              "name": "_dateCreated",
              "type": "uint256"
            },
            {
              "name": "_endDate",
              "type": "uint256"
            }
          ],
          "name": "createPoll",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_candidate",
              "type": "string"
            },
            {
              "name": "pollIndex",
              "type": "uint256"
            }
          ],
          "name": "createPollCandidate",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "pollIndex",
              "type": "uint256"
            },
            {
              "name": "candidateIndex",
              "type": "uint256"
            }
          ],
          "name": "vote",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "pollIndex",
              "type": "uint256"
            }
          ],
          "name": "checkIfOwner",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "pollIndex",
              "type": "uint256"
            },
            {
              "name": "candidateIndex",
              "type": "uint256"
            }
          ],
          "name": "getCandidateName",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "pollIndex",
              "type": "uint256"
            }
          ],
          "name": "getNumberOfCandidates",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "pollIndex",
              "type": "uint256"
            },
            {
              "name": "candidateIndex",
              "type": "uint256"
            }
          ],
          "name": "getNumberOfVotes",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "pollIndex",
              "type": "uint256"
            }
          ],
          "name": "getPollDetails",
          "outputs": [
            {
              "name": "_title",
              "type": "string"
            },
            {
              "name": "_description",
              "type": "string"
            },
            {
              "name": "_dateCreated",
              "type": "uint256"
            },
            {
              "name": "_endDate",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
    ]
}

export default contract;

