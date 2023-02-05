import Layout from "../components/Layout";

function Policies() {
  return (
    <div>
      <h1 className="text-3xl font-bold  text-red-600">List of Policies</h1>
      <Layout>
        <h1 className="text-3xl font-bold  text-red-600 ml-12">
          List of Policies
        </h1>
        <div className="bg-white border border-red-200 rounded-lg shadow pb-10 mx-8 px-8 py-8 my-4 ">
          <p className="bg-red-600 text-[#fff] p-2">Jeevan Bheema Policy</p>
          <p>Insurance Company:HDFC</p>
          <p>This policy provides 100% cover upto 7lakh</p>
          <button className="bg-red-600 text-[#fff] rounded-xl p-2 mt-2 font-bold">
            Buy Policy
          </button>
        </div>
        <div className="bg-white border border-red-200 rounded-lg shadow pb-10 mx-8 px-8 py-8 my-4 ">
          <p className="bg-red-600 text-[#fff] p-2">LIC Health PolicyId</p>
          <p>Insurance Company: LIC </p>
          <p>This policy provides 90% cover upto 40lakh</p>
          <button className="bg-red-600 text-[#fff] rounded-xl p-2 mt-2 font-bold">
            Buy Policy
          </button>
        </div>
      </Layout>
    </div>
  );
}

export default Policies;
