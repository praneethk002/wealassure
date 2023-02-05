import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
function HospitalDashboard() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
      <h1 className="text-3xl font-bold  text-red-600">Hospital Dashboard</h1>
        <button
          className="bg-red-100 px-4 py-2 border-rounded-sm "
          onClick={() => {
            navigate("/hospital/create-bill");
          }}
        >
          Create a bill
        </button>
      </div>
    </Layout>
  );
}

export default HospitalDashboard;
