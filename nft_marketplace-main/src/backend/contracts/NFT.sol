// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721URIStorage, Ownable {
    uint public plateCount;
    uint public platePrice = 1 wei;

    mapping(string => bool) public plateAlreadyExists;
    mapping(string => uint) public platesNumber;
    mapping(uint => string) public platesInfo;

    address public POC_COO;
    uint8 public COO_percentage = 50;

    constructor() ERC721("Plates on Chain", "POC"){
        POC_COO = owner();
    }

    function changeCOO(address newCOO) public onlyOwner {
        POC_COO = newCOO;
    }

    function mint(string memory plateInfo, string memory _tokenURI) external payable returns(uint) {
        require(plateAlreadyExists[plateInfo] == false, "Plate Already Exists");
        require(msg.value == platePrice, "Amount Error");
        plateAlreadyExists[plateInfo] = true;
        platesNumber[plateInfo] = plateCount;
        platesInfo[plateCount] = plateInfo;
        _safeMint(msg.sender, plateCount);
        _setTokenURI(plateCount, _tokenURI);
        plateCount ++;
        return(plateCount);
    }

    function adjustPrice(uint newPrice) public onlyOwner {
        platePrice = newPrice;
    }

    function withdrawPayments() public payable {
        require(msg.sender == owner() || msg.sender == POC_COO, "User not authorized!");
        uint256 amount = address(this).balance;
        require(amount > 0, "Balance is zero!");

        payable(POC_COO).transfer((amount / 100) * COO_percentage);
        payable(owner()).transfer((amount / 100) * (100-COO_percentage));
    }
}
