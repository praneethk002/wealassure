import Layout from "../components/Layout";
import { useState } from "react";
import img1 from "../images/policy.jpeg";
import img2 from "../images/bill.jpeg";
function UserDashboard() {
  const [bills, setBills] = useState([]);
  const [policy, setPolicy] = useState([]);
  return (
    <Layout>
      <div className="container-fluid flex justify-center mt-8">
        <div className="">
          <div className="max-w-sm bg-white border border-red-200 rounded-lg shadow pb-10 mx-8 px-8 py-8">
            <a href="#">
              <img className="rounded-t-lg" src={img2} alt="" />
            </a>
            <a
              href="#"
              className="mx-28 mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg"
            >
              View Bills
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-red-200 rounded-lg shadow mx-8">
          <a href="#">
            <img className="rounded-t-lg h-34"  src={img1} alt="" />
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
