// // SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;



contract MyUser{

    
    uint32 public user_id = 0;

// // A constructor is a function that has the same name as the contract
// // A modifier is function that is used declaratively in a function.
//     address public user;
    
    struct merchant{
        uint256 merchant_id;
        uint16 country_code;
        string merchant_name;
        uint256 admin_id;
        uint256 timestamp;
    }

    struct user {
        uint32 user_id;
        string full_name;
        uint32 country_code;
        uint256 timestamp;
    }

    mapping(uint32=>user) public newUser;
    

//     // Create user
    function addPerson () public {
        // person[msg.sender].push(person(person));
        // return personId;
    }
    // Read user
//     modifier onlyUser() {
//         require(msg.sender==user);
//         _;
//     }
    function getPerson (uint32 _personId) public {
        // return personId;
    }



}
