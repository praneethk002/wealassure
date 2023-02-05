import Layout from "../components/Layout";
function InsuranceDashboard() {
  return (
    <Layout>
      <div className="container-fluid grid h-screen place-items-center ">
        <div className="flex justify-center">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Requested Payments
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Claims to be paid
              </p>
              <a
                href="./requestedPayments"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
              >
                View Requests
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default InsuranceDashboard;
