import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function ShowBills() {
  const [bills, setBills] = useState([]);
  const { address } = useSelector((state) => state.auth);
  const getBills = async () => {
    console.log("ADDRESS", address);
    const res = await axios.get(
      `http://localhost:2000/api/getBills/${address}`
    );
    console.log(res.data);

    setBills(() => [...res.data.bills]);
    console.log(bills);
  };
  useEffect(() => {
    getBills();
  }, []);
  return (
    <>
      <Layout>
        <p className="text-3xl font-bold  text-red-600 ml-8" >List of User Bills</p>
        {bills.map((bill) => {
          return (
            <div className="bg-white border border-red-200 rounded-lg shadow pb-10 mx-8 px-8 py-8 my-4 ">
              <p>Insurance Company: {bill?.insuranceCompany}</p>
              <p>Prescription: {bill?.prescription}</p>
              <p>Bill Amount: {bill?.billAmount}</p>
              <p className="bg-red-600 text-[#fff] ">
                Bill Status: {bill?.billStatus}
              </p>
              <p>PolicyId: {bill?.policyId}</p>
              <p>Hospital Wallet: {bill?.hospitalWallet}</p>
              <button className="bg-red-600 text-[#fff] rounded-xl p-2 mt-2 font-bold">
                Claim Insurance
              </button>
            </div>
          );
        })}
      </Layout>
    </>
  );
}

export default ShowBills;
