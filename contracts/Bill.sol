//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

error Bill__NotRequestedByHospital();
error Bill_WithdrawFailed();

contract Bill {
    string public documents;
    uint256 public billAmount;
    address public hospitalWalletAddress;
    string public policyId;
    address public userWallerAddress;

    constructor(
        string memory _documents,
        uint256 _billAmount,
        address _hospitalWalletAddress,
        string memory _policyId,
        address _userWalletAddress
    ) {
        documents = _documents;
        billAmount = _billAmount;
        hospitalWalletAddress = _hospitalWalletAddress;
        policyId = _policyId;
        userWallerAddress = _userWalletAddress;
    }

    function withdraw(address hospAddress) public {
        if (hospAddress != hospitalWalletAddress) {
            revert Bill__NotRequestedByHospital();
        }
        (
            bool callSuccess, /*bytes memory dataReturned*/

        ) = payable(hospitalWalletAddress).call{value: address(this).balance}(
                ""
            );

        if (!callSuccess) {
            revert Bill_WithdrawFailed();
        }
    }
}
