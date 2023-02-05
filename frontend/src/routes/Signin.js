import img1 from "../images/metamask.jpeg";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import { MoralisProvider } from "react-moralis";
import { useMoralis } from "react-moralis";

import { setAddress } from "../features/authSlice";
import { factoryAbi, factoryAddress } from "../constants";
function Signin() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const [currentContractVal, setCurrentContractVal] = useState(null);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };
  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(
      factoryAddress,
      factoryAbi,
      tempSigner
    );
    setContract(tempContract);
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    updateEthers();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // const { account } = useContext(AuthContext);

  const stateAddress = useSelector((state) => state.auth.address);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (account) {
  //     dispatch(setAddress(account));
  //   }
  // }, [account]);

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
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button onClick={connectWalletHandler}>{connButtonText}</button>
          </div>
          {stateAddress && <div>Account Number {stateAddress}</div>}
        </div>
      </div>
    </Layout>
  );
}

export default Signin;
