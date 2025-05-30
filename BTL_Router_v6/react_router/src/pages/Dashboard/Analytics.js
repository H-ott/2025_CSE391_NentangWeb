export default function Analytics() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Analytics Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Visitors</h3>
          <p className="text-2xl font-bold text-blue-600">12,345</p>
          <p className="text-sm text-gray-600">+12% this week</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Sales</h3>
          <p className="text-2xl font-bold text-green-600">$8,765</p>
          <p className="text-sm text-gray-600">+9% this week</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Conversions</h3>
          <p className="text-2xl font-bold text-purple-600">2.5%</p>
          <p className="text-sm text-gray-600">Stable</p>
        </div>
      </div>
    </div>
  );
}
