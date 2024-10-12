export const factoryAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "type": "error",
      "name": "AccessControlBadConfirmation"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "account", "type": "address" },
        {
          "internalType": "bytes32",
          "name": "neededRole",
          "type": "bytes32"
        }
      ],
      "type": "error",
      "name": "AccessControlUnauthorizedAccount"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32",
          "indexed": true
        },
        {
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32",
          "indexed": true
        },
        {
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "RoleAdminChanged",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "RoleGranted",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "RoleRevoked",
      "anonymous": false
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ]
    },
    {
      "inputs": [
        { "internalType": "string", "name": "name", "type": "string" },
        { "internalType": "string", "name": "symbol", "type": "string" },
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "createEventTickets"
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "getRoleAdmin",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "getTickets",
      "outputs": [
        {
          "internalType": "contract Ticket[]",
          "name": "",
          "type": "address[]"
        }
      ]
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" },
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "grantRole"
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" },
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "hasRole",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" },
        {
          "internalType": "address",
          "name": "callerConfirmation",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "renounceRole"
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" },
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "revokeRole"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "supportsInterface",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    }
]

export const ticketAbi = [
    {
      "inputs": [
        { "internalType": "address", "name": "admin", "type": "address" },
        { "internalType": "string", "name": "name", "type": "string" },
        { "internalType": "string", "name": "symbol", "type": "string" }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "type": "error",
      "name": "AccessControlBadConfirmation"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "account", "type": "address" },
        {
          "internalType": "bytes32",
          "name": "neededRole",
          "type": "bytes32"
        }
      ],
      "type": "error",
      "name": "AccessControlUnauthorizedAccount"
    },
    {
      "inputs": [],
      "type": "error",
      "name": "ERC721EnumerableForbiddenBatchMint"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "sender", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721IncorrectOwner"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "type": "error",
      "name": "ERC721InsufficientApproval"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "approver", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidApprover"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "operator", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidOperator"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidOwner"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "receiver", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidReceiver"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "sender", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidSender"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "type": "error",
      "name": "ERC721NonexistentToken"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "uint256", "name": "index", "type": "uint256" }
      ],
      "type": "error",
      "name": "ERC721OutOfBoundsIndex"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "approved",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "Approval",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool",
          "indexed": false
        }
      ],
      "type": "event",
      "name": "ApprovalForAll",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_fromTokenId",
          "type": "uint256",
          "indexed": false
        },
        {
          "internalType": "uint256",
          "name": "_toTokenId",
          "type": "uint256",
          "indexed": false
        }
      ],
      "type": "event",
      "name": "BatchMetadataUpdate",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256",
          "indexed": false
        }
      ],
      "type": "event",
      "name": "MetadataUpdate",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32",
          "indexed": true
        },
        {
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32",
          "indexed": true
        },
        {
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "RoleAdminChanged",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "RoleGranted",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "RoleRevoked",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "Transfer",
      "anonymous": false
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "MINTER_ROLE",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "approve"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "balanceOf",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "getApproved",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ]
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "getRoleAdmin",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "minter", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "grantMinterRole"
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" },
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "grantRole"
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" },
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "hasRole",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "address", "name": "operator", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "isApprovedForAll",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "name",
      "outputs": [
        { "internalType": "string", "name": "", "type": "string" }
      ]
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "ownerOf",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ]
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" },
        {
          "internalType": "address",
          "name": "callerConfirmation",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "renounceRole"
    },
    {
      "inputs": [
        { "internalType": "bytes32", "name": "role", "type": "bytes32" },
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "revokeRole"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "string", "name": "uri", "type": "string" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "safeMint"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "safeTransferFrom"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
        { "internalType": "bytes", "name": "data", "type": "bytes" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "safeTransferFrom"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        { "internalType": "bool", "name": "approved", "type": "bool" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "setApprovalForAll"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "supportsInterface",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "symbol",
      "outputs": [
        { "internalType": "string", "name": "", "type": "string" }
      ]
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "index", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "tokenByIndex",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "uint256", "name": "index", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "tokenURI",
      "outputs": [
        { "internalType": "string", "name": "", "type": "string" }
      ]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "totalSupply",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "transferFrom"
    }
]