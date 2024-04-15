// // SPDX-License-Identifier: MIT
// pragma solidity >=0.5.0 <0.9.0;

// contract MyUser{

//     struct User {
//         uint userId;
//     }

//     mapping(address=>User[]) private Users;

//     // Create user
//     function addUser () public{
//         Users[msg.sender].push(User(_userId));
//     }
//     // Read user
//     function getUser () public{

//     }
//     // Update user
//     function editUser () public{

//     }
//     // Delete user
//     function deleteUser () public{

//     }
// }

// contract MyProduct is MyUser {
//     struct Product{
//         uint id;
//         string text;
//         bool completed;
//     }

//     // Create product
//     function addProduct() public {

//     }
//     // Read
//     function getProduct() public {

//     }
//     // Update
//     function editProduct() public {

//     }
//     // Delete
//     function deleteProduct() public {

//     }
// }
// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract MyUser {
    struct User {
        uint userId; // Added type uint for userId
    }

    mapping(address => User[]) private Users;

    // Create user
    function addUser(uint _userId) public {
        Users[msg.sender].push(User(_userId));
    }

    // Read user
    function getUser(uint _index) public view returns (uint) {
        return Users[msg.sender][_index].userId;
    }

    // Update user
    function editUser(uint _index, uint _newUserId) public {
        Users[msg.sender][_index].userId = _newUserId;
    }

    // Delete user
    function deleteUser(uint _index) public {
        delete Users[msg.sender][_index];
    }
}

contract MyProduct is MyUser {
    struct Product {
        uint id; // Added type uint for id
        string text;
        bool completed;
    }

    // Create product
    function addProduct(uint _id, string memory _text, bool _completed) public {
        // Implement your logic here
    }

    // Read product
    function getProduct(uint _index) public view returns (uint, string memory, bool) {
        // Implement your logic here
    }

    // Update product
    function editProduct(uint _index, string memory _text, bool _completed) public {
        // Implement your logic here
    }

    // Delete product
    function deleteProduct(uint _index) public {
        // Implement your logic here
    }
}
