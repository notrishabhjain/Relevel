pragma solidity ^0.4.15;

contract User {

  mapping(address => bytes32) public users;

  event CreateUser(address indexed _address, bytes32 dummy);
  event DestroyUser(address indexed _address);

  function exists (address _address) public constant returns (bool _exists) {
    return (users[_address] != bytes32(0));
  }

  function create (bytes32 dummy) public {
    users[msg.sender] = dummy ;
    CreateUser(msg.sender, dummy);
  }

  function destroy () public {
    require(exists(msg.sender));
    delete users[msg.sender];
    DestroyUser(msg.sender);
  }

  function get (address _address) public constant returns(bytes32 dummy) {
    require(exists(_address));
    return (users[_address]);
  }

}
