// // SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;



contract MyUser{

    
    // uint32 public user_id = 0;


    
    struct Merchant{
        uint256 merchant_id;
        uint16 country_code;
        string merchant_name;
        uint256 admin_id;
        uint256 timestamp;
    }

    struct UserDetails {
        uint32 user_Id;
        string full_name;
        uint32 country_code;
        uint256 timestamp;
    }

    mapping(uint256 =>UserDetails) public users;

    function addPerson(uint256 _user_Id, string memory _full_name, uint32 _country_code, uint256 timestamp) public returns (string memory) {
        UserDetails memory newUser= UserDetails(uint32(_user_Id), _full_name, _country_code, timestamp);
        users[_user_Id] = newUser;
        // string memory message = "Add person";
        return "Welcome newUser";
    }
    
    // function getPerson (uint256 _user_Id) public returns (string memory) {
    //     string memory message = "FarmDirect";
    //     return (message);
    // }



}
