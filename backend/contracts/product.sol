// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.9.0;

contract Product {
    uint32 public product_id = 0;

        struct product{
         uint product_id;
        }

    mapping(uint32=> product) public newProduct;
}