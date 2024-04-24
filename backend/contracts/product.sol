// SPDX-License-Identifier: MIT

pragma solidity >=0.4.0 <0.9.0;

// import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import './farm.sol';

contract Product is farm {
    
    uint32 public product_id = 0;

        struct productInfo{
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

    mapping(uint32=> productInfo) public newProduct;
    mapping(address => uint256) balances;
    // Added two functions for creating (CREATE) and getting (READ) (CRUD)
    // paying ether for products
    function pay() external payable {
        if(msg.value < 1000){
            // revert cancels a transaction.
            revert();
        }
        balances[msg.sender] += msg.value;
    }
    function balanceof() external view{
        return address(this).balance;
    }
    // Sending ether contact-to-contact
    address payable[] farmers;
    function sendingEther(address payable farmer) external{
       farmer.transfer(1 ether); 
    }
    function addProduct(uint256 _product_id, string memory _productName, uint256 _merchant_id, uint256 _timestamp) public {
        
        return "New Product";
    }
    function getProduct(uint256 _productInfo) public {
        string memory message = "FarmDirect";
        return (message);
    }

}