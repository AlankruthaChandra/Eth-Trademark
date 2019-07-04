pragma solidity ^0.5.0;

import 'zos-lib/contracts/Initializable.sol';
import 'openzeppelin-eth/contracts/token/ERC721/ERC721Full.sol';
import 'openzeppelin-eth/contracts/token/ERC721/ERC721Mintable.sol';

contract Trademark is Initializable, ERC721Full, ERC721Mintable {
  function initialize() public initializer {
    ERC721.initialize();
    ERC721Enumerable.initialize();
    ERC721Metadata.initialize("Trademark", "TM");
    ERC721Mintable.initialize(msg.sender);
  }

  // Mark data
  struct Mark {
    string name;
  }

  // mapping the Mark with the Owner Address
  mapping(uint256 => Mark) public tokenIdToMarkInfo;
  // mapping the TokenId and price
  mapping(uint256 => uint256) public marksForSale;

  // Create Mark using the Struct
  function createMark(string memory _name, uint256 _tokenId) public { // Passing the name and tokenId as a parameters
    Mark memory newMark = Mark(_name); // Mark is an struct so we are creating a new Mark
    tokenIdToMarkInfo[_tokenId] = newMark; // Creating in memory the Mark -> tokenId mapping
    _mint(msg.sender, _tokenId); // _mint assign the the Mark with _tokenId to the sender address (ownership)
  }
  function lookUptokenIdToMarkInfo (uint _tokenId) public view returns (string memory) {
    //1. You should return the Mark saved in tokenIdToMarkInfo mapping
    return tokenIdToMarkInfo[_tokenId].name;
  }
}