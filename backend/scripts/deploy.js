// const hre = require("hardhat");
// require("@nomicfoundation/hardhat-toolbox");

// const {ethers} = require('hardhat');

const main = async ()=> {
  const MyUser = await hre.ethers.getContractFactory("MyUser");
  const myUser = await MyUser.deploy();

  // await myUser.deployed();

  console.log("Deployed contract address:", myUser.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
const runMain = async () =>{
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}
runMain();