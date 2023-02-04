//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./User.sol";
import "./Bill.sol";

error Company_InsuffiecientRequest();
error Company_SendToBillFailed();

contract Company {
    string public policyListString;
    address private CompanyWalletAddress;

    struct Holder {
        address userAddress;
        string policyId;
        string userPolicyId;
        uint256 totalAmount;
        uint256 claimed;
        address[] bills;
    }
    mapping(address => Holder) public holderList;

    address[] public requestsArrived;

    constructor(address _CompanyWalletAddress, string memory _policyListString)
    {
        policyListString = _policyListString;
        CompanyWalletAddress = _CompanyWalletAddress;
    }

    function addPolicyForUser(
        address userWalletAddress,
        address userContractAddress,
        string memory policyId,
        string memory userPolicyId,
        uint256 totalAmount,
        uint256 claimed
    ) public {
        User currentUser = User(userContractAddress);
        currentUser.addPolicyForUser(
            policyId,
            userPolicyId,
            totalAmount,
            claimed
        );

        holderList[userWalletAddress] = Holder(
            userContractAddress,
            policyId,
            userPolicyId,
            totalAmount,
            claimed,
            new address[](0)
        );
    }

    function requestedPayment(
        address _userWalletAddress,
        address _billAddress,
        uint256 amount
    ) public {
        require(
            holderList[_userWalletAddress].userAddress == msg.sender,
            "Only user can request payment"
        );
        if (
            (holderList[_userWalletAddress].totalAmount -
                holderList[_userWalletAddress].claimed) < amount
        ) {
            revert Company_InsuffiecientRequest();
        }
        requestsArrived.push(_billAddress);
        holderList[_userWalletAddress].bills.push(_billAddress);
    }

    function companyPayBill(address _billAddress, uint256 amount) public {
        (
            bool callSuccess, /*bytes memory dataReturned*/

        ) = payable(_billAddress).call{value: amount}("");
        if (!callSuccess) {
            revert Company_SendToBillFailed();
        }
    }
}
