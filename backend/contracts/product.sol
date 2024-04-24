// SPDX-License-Identifier: MIT

pragma solidity >=0.4.0 <0.9.0;

import './farm.sol';

contract Product is farm {
    
    uint32 public product_id = 0;

        struct ProductDetails{
         uint256 product_id;
         string productName;
         uint256 merchant_id;
         uint256 timestamp;
        }
        struct orders {
            uint256 order_id;
            uint256 user_id;
            uint256 timestamp;
            uint256 countrycode;
        }

    mapping(uint32=> ProductDetails) public products;
    mapping(address => uint256) balances;
    // Added two functions for creating (CREATE) and getting (READ) (CRUD)
    // paying ether for products
    function pay() external payable {
        // if(msg.value < 1000){
        //     // revert cancels a transaction.
        //     revert();
        // }
        balances[msg.sender] += msg.value;
    }
    function balanceof() external view returns (uint256) {
        return address(this).balance;
    }
    // Sending ether contact-to-contact
    address payable[] farmers;
    function sendingEther(address payable farmer) external{
       farmer.transfer(1 ether); 
    }
    function addProduct(uint256 _product_id, string memory _productName, uint256 _merchant_id, uint256 _timestamp) public returns (string memory) {        
        ProductDetails memory newProduct=ProductDetails(uint32(_product_id), _productName, _merchant_id, _timestamp);
        products[product_id] = newProduct;
        product_id++;
        return "New Product";
    }

    function getProduct(uint256 _productInfo) public view returns (string memory) {
        string memory message = "FarmDirect";
        return (message);
    }

}