import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const navigate = useNavigate();

  const { address } = useSelector((state) => state.auth);
  const handleHospitalSignup = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:2000/api/createHospital",
      {
        name,
        email,
        phno,
        walletAddress: address,
      }
    );
    if (response.data) {
      navigate("/hospitalDashboard");
    }
  };
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto mt-12">
      <form className="space-y-6" onSubmit={handleHospitalSignup}>
        <h5 className="text-2xl font-bold text-red-600 mx-12">
          HOSPITAL SIGN UP
        </h5>
        <div>
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hostpital name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hospital email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@company.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            for="no"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Phone number
          </label>
          <input
            type="number"
            name="no"
            id="no"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            onChange={(e) => setPhno(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          value="Hospital Signup"
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

export default DoctorSignUp;
