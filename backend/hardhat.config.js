// require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

// const SEPOLIA_URL = process.env.SEPOLIA_URL;
// const SEPOLIA_PRIVATE_KEY = "fe3584fcdcf46a0001213d7cb9a0f645fb62c6ef4cfe8ae710c473b1ddd09bf6";
const{SEPOLIA_URL,PRIVATE_KEY}= process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat:{},
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  Etherscan: {
    apiKey:process.env.ETHERSCAN_KEY
  }
};

