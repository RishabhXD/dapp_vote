require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {
      chainId: 1337,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
