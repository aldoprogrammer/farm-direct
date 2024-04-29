// 
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.4.0 <0.9.0;

import './MyUser.sol';

// Inheritance
contract Farm is MyUser {
    struct FarmDetails{
        uint256 farm_id;
        string farmName;
        uint256 phonenumber;
    }
    struct countries{
        uint256 countrycode;
        string country_name;
        string continent_name;
    }
    mapping(uint256 => FarmDetails) public farms;
    uint256 public farm_id;

    event FarmCreated(uint,string,uint);

    constructor () {
        farm_id = 0;
    }

    function addFarm(uint256 _farm_id, string memory _farmName, uint256 _phonenumber) public returns (string memory) {
        FarmDetails memory newFarm= FarmDetails(uint32(_farm_id), _farmName, _phonenumber);
        farms[_farm_id]= newFarm;
        emit FarmCreated(_farm_id, _farmName, _phonenumber);
        farm_id++;
        return "New Farm";
    }
    function getFarm(uint256 _farm_id) public view returns (uint256, string memory, uint256) {
        
        return (
            farms[_farm_id].farm_id,
            farms[_farm_id].farmName,
            farms[_farm_id].phonenumber
            );
    }
}
// 0xf08dee2d32b97aad5f6354e645ff53ccb5b3a324