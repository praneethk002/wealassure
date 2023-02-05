import { useState } from "react";
import axios from "axios";
import { factoryAbi, factoryAddress } from "../constants";
import { useSelector } from "react-redux";
// import { ethers } from "ethers";

function UserSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [age, setAge] = useState("");
  // const { account } = useMoralis();

  const { address } = useSelector((state) => state.auth);
  const handleSubmit = () => {};
  // const handleUserSignup = async (e) => {
  //   e.preventDefault();

  //   const response = await axios.post("http://localhost:2000/api/createUser", {
  //     name,
  //     email,
  //     phno,
  //     age,
  //     walletAddress: address,
  //   });

  //   if (response.status == 200) {
  //     const signer = new ethers.providers.JsonRpcProvider(
  //       "https://polygon-mumbai.g.alchemy.com/v2/w8Z95QtDk2UUcq-RrlaSRLXlDDUg1Pkr"
  //     ).getSigner(address);
  //     let contract = new ethers.Contract(factoryAddress, factoryAbi, signer);

  //     const user = await contract.createUser(response.data._id);
  //   }
  // };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto mt-12">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-2xl font-bold text-red-600 mx-16">USER SIGN UP</h5>
        <div>
          <div>
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              User name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <label
            for="email"
            className="block text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@company.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label for="no" className="block text-sm font-medium text-gray-900 ">
            Your phone number
          </label>
          <input
            type="number"
            name="phno"
            id="phno"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            onChange={(e) => {
              setPhno(e.target.value);
            }}
            required
          />
          <label for="age" className="block text-sm font-medium text-gray-900 ">
            Your age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            onChange={(e) => {
              setAge(e.target.value);
            }}
            required
          />
        </div>

        <input
          type="submit"
          value="Create User"
          className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        />
        <div className="text-sm font-medium text-gray-500 ">
          Not registered?{" "}
          <a href="#" className="text-red-700 hover:underline ">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
}

export default UserSignUp;
