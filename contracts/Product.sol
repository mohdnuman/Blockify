// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

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
