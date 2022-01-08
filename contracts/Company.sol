// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "./Product.sol";

contract Company{

  mapping(string=>address) public products;
  address public owner;
  string public name;

  constructor(address _owner, string memory _name) {
    owner=_owner;
    name=_name;
  }

  modifier auth{
    require(msg.sender==owner);
    _;
  }

  function createProduct(string memory _id, string memory _name) public auth{
    Product newProduct= new Product(_id,_name,msg.sender);
    products[_id]=address(newProduct);

  } 

  function verifyProduct(string memory _id) public view returns(bool){
    if(products[_id]==address(0))
    {
      return false;
    }
    else{
      return true;
    }
  } 
}
