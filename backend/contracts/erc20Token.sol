// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity >=0.4.0 <= 0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract FarmDirect is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("FarmDirect", "FmD")
        Ownable(initialOwner)
        ERC20Permit("FarmDirect")
    {}

    function mint(uint256 amount) public payable {
        require(msg.value == amount* 0.0001 ether, "invalid amount of ether");
        _mint(msg.sender, amount);
    }
    receive() external payable{}
    fallback() external payable{}
}