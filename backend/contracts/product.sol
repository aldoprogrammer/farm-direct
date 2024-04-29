// SPDX-License-Identifier: MIT

pragma solidity >=0.4.0 <0.9.0;

import '../contracts/Farm.sol';
import '../contracts/MyUser.sol';

contract Product is Farm, MyUser {
// contract Product is Farm, MyUser {
    
    uint32 public product_id = 0;
    uint public orderCount = 0;

        struct ProductDetails{
         uint256 product_id;
         string productName;
         uint256 merchant_id;
         uint256 timestamp;
         uint256 price;
        }
        struct Orders {
            uint256 order_id;
            uint256 farm_id;
            uint256 user_id;
            uint256 timestamp;
            uint256 countrycode;
            uint256 price;
        }

        Orders [] public orders;
        address payable users;

        event DeliveryCreated(uint256 order_id, address indexed user_id, address indexed farm_id, uint256 timestamp, uint256 country_code, uint256 price);

        constructor(){
            orderCount = 0;
        }

        function createOrder (address _order_id, address _user_id, address _farm_id, uint256 _timestamp, uint256 _countrycode, uint256 _price) public payable {
            require(msg.value == _price, "Payment amount must match the price");

            Orders memory order = Orders (msg.sender, _order_id, _user_id, _farm_id, _timestamp, _countrycode, _price); 
            orders.push(order);
            // Orders[msg.sender].push(order);
            
            // orders.push(Order(orderCount, _order_id, _user_id, _timestamp, _countrycode, _price));

            emit DeliveryCreated(orderCount, _order_id, _user_id, _farm_id, _timestamp, _countrycode, _price);
            orderCount++;
            // Order.push(Order(orderCount, _order_id, _user_id, _timestamp, _countrycode, _price))
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
        // return farm_id;
        return "New Product";
    }

    // function getProduct(uint256 _productInfo) public view returns (string memory) {
    //     string memory message = "FarmDirect";
    //     return (message);
    // }

}
