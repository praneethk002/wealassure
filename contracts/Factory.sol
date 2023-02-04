//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./User.sol";
import "./Hospital.sol";
import "./Company.sol";

contract Factory {
    struct AccType {
        string ipfs;
        address addr;
        bool valid;
    }
    mapping(address => AccType) public userList;

    mapping(address => AccType) public hospitalList;

    mapping(address => AccType) public insuranceCompanyList;

    function checkAccountType(address addr)
        public
        view
        returns (string memory ipfs, address depAddr)
    {
        if (
            !userList[addr].valid &&
            !hospitalList[addr].valid &&
            !insuranceCompanyList[addr].valid
        ) {
            return ("", address(0));
        } else if (userList[addr].valid) {
            return (userList[addr].ipfs, userList[addr].addr);
        } else if (hospitalList[addr].valid) {
            return (hospitalList[addr].ipfs, hospitalList[addr].addr);
        } else if (insuranceCompanyList[addr].valid) {
            return (
                insuranceCompanyList[addr].ipfs,
                insuranceCompanyList[addr].addr
            );
        }
    }

    function createUser(string memory ipfs) public {
        User user = new User(ipfs);
        userList[msg.sender] = AccType(ipfs, address(user), true);
    }

    function createHospital(string memory ipfs) public {
        Hospital hospital = new Hospital(ipfs);
        hospitalList[msg.sender] = AccType(ipfs, address(hospital), true);
    }

    function createInsuranceCompany(string memory ipfs) public {
        Company company = new Company(msg.sender, ipfs);
        insuranceCompanyList[msg.sender] = AccType(
            ipfs,
            address(company),
            true
        );
    }
}
