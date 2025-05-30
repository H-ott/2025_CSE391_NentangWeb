export default function Reports() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📄 Reports Overview</h2>

      <div className="space-y-4">
        <div className="bg-white border p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold">Monthly Sales Report</h3>
          <p className="text-sm text-gray-600">Updated: May 2025</p>
          <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
            View Report
          </button>
        </div>

        <div className="bg-white border p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold">User Behavior Report</h3>
          <p className="text-sm text-gray-600">Updated: May 2025</p>
          <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
            View Report
          </button>
        </div>
      </div>
    </div>
  );
}
