import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./routes/Signin";
import UserDashboard from "./routes/UserDashboard";
import InsuranceDashboard from "./routes/Insurance";
import Signup from "./routes/Signup";
import RequestedPayments from "./routes/RequestedPayments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/insuranceDashboard" element={<InsuranceDashboard />} />
        <Route path="/requestedPayments" element={<RequestedPayments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
