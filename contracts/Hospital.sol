//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./User.sol";
import "./Bill.sol";

contract Hospital {
    mapping(address => address[]) public billList;
    string public billsIpfs;

    constructor(string memory bills) {
        billsIpfs = bills;
    }

    function addBillForUser(
        string memory _documents,
        uint256 _billAmount,
        address _userWalletAddress,
        string memory _policyId
    ) public {
        Bill bill = new Bill(
            _documents,
            _billAmount,
            msg.sender,
            _policyId,
            _userWalletAddress
        );
        billList[_userWalletAddress].push(address(bill));
    }

    function requestWithdraw(address _billContractAddress) public {
        Bill bill = Bill(_billContractAddress);
        bill.withdraw(msg.sender);
    }
}
