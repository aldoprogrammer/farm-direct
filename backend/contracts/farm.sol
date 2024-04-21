// 
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.4.0 <0.9.0;

import './user.sol';

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
}