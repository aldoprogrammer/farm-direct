// 
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.4.0 <0.9.0;

import './user.sol';
// Inheritance
contract farm is MyUser {
    struct farmDetails{
        uint256 farm_id;
        string farmName;
        uint256 phonenumber;
    }
    struct countries{
        uint256 countrycode;
        string country_name;
        string continent_name;
    }
    function addFarm(uint256 _farm_id, string memory _farmName, uint256 _phonenumber) public returns (string memory) {
        FarmDetails memory newFarm= FarmDetails(uint32(_farm_id), string memory )
        farm[farm_id]= newFarm;
        farm_id++;
        return "New Farm";
    }
    function getFarm(uint256 _farmDetails) public returns (string memory) {
        string memory message = "FarmDirect";
        return (message);
    }
}