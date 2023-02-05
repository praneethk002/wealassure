import Layout from "../components/Layout";
import { useState } from "react";
import UserSignup from "../routes/UserSignup";
import DoctorSignup from "../routes/DoctorSignup";
import InsuranceSignup from "../routes/InsuranceSignup";
function Signup() {
  const[user,setUser]=useState("user");
  const renderTab = () => {
    switch (user) {
      case "user":
        return <UserSignup />;
      case "doctor":
        return <DoctorSignup />;
      case "insurance":
        return <InsuranceSignup />;
    }
  };
  return (
    <Layout>
      <div className="flex justify-center mt-8">
        <button className="bg-red-700 mx-8 text-[#fff] py-3 px-16 rounded-xl text-lg font-bold" onClick={() => setUser("user")}>User</button>
        <button className="bg-red-700 mx-8 text-[#fff] py-3 px-16 rounded-xl text-lg font-bold" onClick={() => setUser("doctor")}>Hospital</button>
        <button className="bg-red-700 mx-8 text-[#fff] py-3 px-16 rounded-xl text-lg font-bold" onClick={() => setUser("insurance")}>Insurance</button>
      </div>
      {renderTab()}
    </Layout>
  );
}

export default Signup;
