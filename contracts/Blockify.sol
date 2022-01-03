// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract company{

  mapping(string=>address) public products;
  address public owner;

  constructor() {
    owner=msg.sender;
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

contract Product{
    string public id;
    address public owner;
    string public name;

    constructor(string memory _id, string memory _name, address _owner) {
      id=_id;
      owner=_owner;
      name=_name;
    }

    function transfer(address _to) public{
      require(msg.sender==owner);
      owner=_to;
    }

}
