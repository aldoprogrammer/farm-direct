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
    }

    struct user {
        uint32 user_id;
        string full_name;
        uint32 country_code;
    }

    mapping(uint32=>user) public newUser;
    

//     // Create user
    // function addPerson () public {
        // person[msg.sender].push(person(person));
        // return personId;
    // }
//     // Read user
//     modifier onlyUser() {
//         require(msg.sender==user);
//         _;
//     }
    function getPerson (uint32 _personId) public {
        // return personId;
    }
//     // Update user
//     function editUser () public{
//         return User;
//     }
//     // Delete user
//     function deleteUser () public{
//         return User;
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
//         for (numProducts>=0; numProducts; numProducts++){
//             if(numProd>=0){
//                 return products;
//             }
//         }
//     }
//     // Read
    function getProduct(uint32 _productId) public {
//         for (numProducts>=0;numProducts;numProducts++){
//             if(numProd>=0){
//                 return products;
//             }
//         }
        
    }
//     // Update
//     function editProduct() public {
//         for (numProducts>=0;numProducts;numProducts++){
//             if(numProd>=0){
//                 return products;
//             }
//         }
//     }
//     // Delete
//     function deleteProduct() public {
//         for (numProducts>=0;numProducts;numProducts++){
//             if(numProd>=0){
//                 return products;
//             }
//         }
//     }
}
