import img1 from "../images/metamask.jpeg";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import axios from "axios";
var { factoryAbi, factoryAddress } = require("../constants");

function Signin() {
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  let account = null;
  let accessToken = null;
  let w3;

  const checkAcc = async () => {
    try {
      // const web3 = new Web3(window.ethereum);
      // const FactoryContract = new web3.eth.Contract(factoryAbi, factoryAddress);
      // let accType = await FactoryContract.methods
      //   .checkAccountType()
      //   .call();
      // console.log("ACCOUNT TYPE", accType);
      // return accType;
    } catch (err) {
      console.log(err);
    }
  };

  const signinHandler = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.send("eth_requestAccounts");
        window.w3 = new Web3(window.ethereum);
        var accounts = await window.w3.eth.getAccounts();

        account = accounts[0];
        console.log("ACC", account);
        dispatch(setAddress(account));

        if (account == "0x4E16a7BEE2284250a5f47499Aa5c38219b2B8485") {
          //rakshith
          navigate("/hospitalDashboard");
        } else if (account == "0xc45e35f857EBcFe4C22D950E9bfaC04756bc8c60") {
          //noel
          navigate("/insuranceDashboard");
        } else if (account == "0x0e1bfe9b461DBF1D4f43e6AbFf621eFbc8390332") {
          // divya
          navigate("/userDashboard");
        } else {
          //praneeth
          navigate("/signup");
        }

        // const userCheck = await axios.get(
        //   `http://localhost:2000/api/getUser/${account}`
        // );
        // console.log(userCheck.data);
        // if (userCheck.data) {
        //   navigate("/userDashboard");
        // }

        const hospitalCheck = await axios.get(
          `http://localhost:2000/api/getHospital/${account}`
        );
        console.log(hospitalCheck.data);
        if (hospitalCheck.data) {
        }
        const companyCheck = await axios.get(
          `http://localhost:2000/api/getCompany/${account}`
        );
        console.log(companyCheck.data);
        if (companyCheck.data) {
        }

        navigate("/signup");
      }
      dispatch(setAddress(account));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Layout>
      <div className="w-full mx-auto mt-8 max-w-sm bg-white border border-red-300 rounded-xl shadow">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={img1}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Connect to Metamask
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Click on the Button to Signin
          </span>
          {address ? (
            <div>Address: {address}</div>
          ) : (
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button onClick={signinHandler}>Sign In</button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Signin;
