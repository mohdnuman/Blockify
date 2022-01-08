// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "./Company.sol";

contract Blockify{
    
    mapping(string=>address) public companies;
    address public owner;

    constructor() {
    owner=msg.sender;
    }

    modifier auth{
       require(msg.sender==owner);
       _;
    }

  function createCompany(string memory _id, string memory _name) public auth returns(address _addr){
    Company newCompany= new Company(msg.sender, _name);
    companies[_id]=address(newCompany);

    return address(newCompany);
  }

}