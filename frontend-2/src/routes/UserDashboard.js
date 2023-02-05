import Layout from "../components/Layout";
import { useState } from "react";
import img1 from "../images/policy.jpeg";
import img2 from "../images/bill.jpeg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function UserDashboard() {
  let [bills, setBills] = useState([]);
  const [showBills, setShowBills] = useState(false);
  const [policy, setPolicy] = useState([]);

  const { address } = useSelector((state) => state.auth);
  const navigate = useNavigate();



  return (
    <Layout>
        <h1 className="text-3xl font-bold  text-red-600">User Dashboard</h1>
      <div className="container-fluid flex justify-center mt-8">


          <div className="">
            <div className="max-w-sm bg-white border border-red-200 rounded-lg shadow pb-10 mx-8 px-8 py-8">
              <a href="#">
                <img className="rounded-t-lg" src={img2} alt="" />
              </a>
              <button
                onClick={() => {navigate("/bills")}}
                className="mx-28 mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg"
              >
                View Bills
              </button>
            </div>
          </div>

        <div className="max-w-sm bg-white border border-red-200 rounded-lg shadow mx-8">
          <a href="#">
            <img className="rounded-t-lg h-34" src={img1} alt="" />
          </a>
          <div className="p-2">
            <a
              href="#"
              className="mx-32 inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg "
            >
              View Policy
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserDashboard;
