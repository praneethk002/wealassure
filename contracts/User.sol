//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Company.sol";
error User_SendToBillFailed();

contract User {
    string public ipfs;
    struct PolicyDetails {
        string policyId;
        string userPolicyId;
        uint256 totalAmount;
        uint256 claimed;
        address insuranceId;
    }

    PolicyDetails public PolicyDetailsStruct;

    constructor(string memory _ipfs) {
        ipfs = _ipfs;
    }

    // will be called by insurance company
    function addPolicyForUser(
        string memory policyId,
        string memory userPolicyId,
        uint256 totalAmount,
        uint256 claimed
    ) public {
        // add policy for user
        PolicyDetailsStruct = PolicyDetails(
            policyId,
            userPolicyId,
            totalAmount,
            claimed,
            msg.sender
        );
    }

    function requestInsuranceCompanyToPay(address billAddress, uint256 amount)
        public
    {
        Company insuranceCompany = Company(PolicyDetailsStruct.insuranceId);
        insuranceCompany.requestedPayment(msg.sender, billAddress, amount);
    }

    function userPayBill(address _billAddress, uint256 amount) public {
        (
            bool callSuccess, /*bytes memory dataReturned*/

        ) = payable(_billAddress).call{value: amount}("");
        if (!callSuccess) {
            revert User_SendToBillFailed();
        }
    }
}
