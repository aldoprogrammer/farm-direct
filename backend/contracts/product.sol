// SPDX-License-Identifier: MIT

pragma solidity >=0.4.0 <0.9.0;

// import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Product {
    // constructor() ERC20 ("Product", "FmD"){}
    uint32 public product_id = 0;

        struct productInfo{
         uint256 product_id;
         string productName;
         uint256 merchant_id;
        }
        struct orders {
            uint256 order_id;
            uint256 user_id;
        }

    mapping(uint32=> productInfo) public newProduct;
    // Added two functions for creating (CREATE) and getting (READ) (CRUD)
    function addProduct(uint256 _productInfo) public {
        string memory message = "FarmDirect";
        return (message);
    }
}