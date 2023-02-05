import React from "react";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function CreateBill() {
  const { address } = useSelector((state) => state.auth);
  const [userWallet, setUserWallet] = useState("");

  const [userContract, setUserContract] = useState("");

  const [insuranceCompany, setInsuranceCompany] = useState("");

  const [prescription, setPrescription] = useState("");

  const [amount, setAmount] = useState("");
  const [policyID, setPolicyID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:2000/api/createBill", {
      userWallet,
      userContract,
      insuranceCompany,
      prescription,
      amount,
      hospitalWalletAddress: address,
      billStatus: "Not Paid",
      policyID,
    });
    if (response.data) {
      alert("Bill Created Successfully");
    }
  };

  return (
    <Layout>
      <form className="space-y-6 w-[80%] ml-20" onSubmit={handleSubmit}>
        <h5 className="text-2xl font-bold text-red-600 mx-16 ">
          CREATE A BILL
        </h5>
        <div className="mx-auto">
          <div>
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              User Wallet
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name"
              onChange={(e) => {
                setUserWallet(e.target.value);
              }}
              required
            />
          </div>
          <label
            for="email"
            className="block text-sm font-medium text-gray-900 "
          >
            User Contract Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            onChange={(e) => {
              setUserContract(e.target.value);
            }}
            required
          />
          <label for="no" className="block text-sm font-medium text-gray-900 ">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            required
          />
          <label for="age" className="block text-sm font-medium text-gray-900 ">
            Insurance company Name
          </label>
          <input
            type="text"
            name="age"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            onChange={(e) => {
              setInsuranceCompany(e.target.value);
            }}
            required
          />
          <label for="age" className="block text-sm font-medium text-gray-900 ">
            prescription
          </label>
          <input
            type="text"
            name="age"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            onChange={(e) => {
              setPrescription(e.target.value);
            }}
            required
          />
          <label for="age" className="block text-sm font-medium text-gray-900 ">
            policyID
          </label>
          <input
            type="text"
            name="age"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            onChange={(e) => {
              setPolicyID(e.target.value);
            }}
            required
          />
        </div>

        <input
          type="submit"
          onSubmit={handleSubmit}
          value="Create Bill"
          className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        />
      </form>
    </Layout>
  );
}

export default CreateBill;
