import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./routes/Signin";
import UserDashboard from "./routes/UserDashboard";
import InsuranceDashboard from "./routes/Insurance";
import Signup from "./routes/Signup";
import RequestedPayments from "./routes/RequestedPayments";
import HospitalDashboard from "./routes/Hospital";
import CreateBill from "./routes/CreateBill";
import ShowBills from "./routes/showBills";
import Policies from "./routes/policies";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/insuranceDashboard" element={<InsuranceDashboard />} />
        <Route path="/requestedPayments" element={<RequestedPayments />} />
        <Route path="/hospitalDashboard" element={<HospitalDashboard />} />
        <Route path="/hospital/create-bill" element={<CreateBill />} />
        <Route path="/bills" element={<ShowBills/>} />
        <Route path="/policy" element={<Policies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
