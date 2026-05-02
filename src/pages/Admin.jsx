import { useState } from 'react';
import { BarChart3, Users, TrendingUp, AlertCircle } from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="bg-white border-b mb-8">
          <div className="flex gap-8">
            {['overview', 'users', 'transactions', 'disputes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-4 font-semibold border-b-2 transition ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total Users', value: '12,543', icon: <Users className="w-8 h-8" /> },
                { label: 'Active Jobs', value: '1,234', icon: <BarChart3 className="w-8 h-8" /> },
                { label: 'Total Revenue', value: 'KES 2.5M', icon: <TrendingUp className="w-8 h-8" /> },
                { label: 'Open Disputes', value: '23', icon: <AlertCircle className="w-8 h-8" /> }
              ].map((stat, idx) => (
                <div key={idx} className="card">
                  <div className="text-primary mb-2">{stat.icon}</div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="font-bold text-lg mb-4">Revenue Trend</h3>
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                  Chart will display here
                </div>
              </div>
              <div className="card">
                <h3 className="font-bold text-lg mb-4">User Growth</h3>
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                  Chart will display here
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">User Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Name</th>
                    <th className="px-6 py-3 text-left font-semibold">Email</th>
                    <th className="px-6 py-3 text-left font-semibold">Type</th>
                    <th className="px-6 py-3 text-left font-semibold">Status</th>
                    <th className="px-6 py-3 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'John Mwangi', email: 'john@klick.app', type: 'Worker', status: 'Active' },
                    { name: 'Sarah Kipchoge', email: 'sarah@klick.app', type: 'Worker', status: 'Active' },
                    { name: 'Alice Johnson', email: 'alice@klick.app', type: 'Customer', status: 'Active' },
                    { name: 'Bob Smith', email: 'bob@klick.app', type: 'Customer', status: 'Inactive' }
                  ].map((user, idx) => (
                    <tr key={idx} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-3">{user.name}</td>
                      <td className="px-6 py-3">{user.email}</td>
                      <td className="px-6 py-3">{user.type}</td>
                      <td className="px-6 py-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <button className="text-primary hover:underline text-sm">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Transaction ID</th>
                    <th className="px-6 py-3 text-left font-semibold">Amount</th>
                    <th className="px-6 py-3 text-left font-semibold">Method</th>
                    <th className="px-6 py-3 text-left font-semibold">Status</th>
                    <th className="px-6 py-3 text-left font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 'TXN001', amount: 'KES 5,000', method: 'M-Pesa', status: 'Completed', date: '2026-05-02' },
                    { id: 'TXN002', amount: 'KES 3,500', method: 'Airtel Money', status: 'Completed', date: '2026-05-01' },
                    { id: 'TXN003', amount: 'KES 7,200', method: 'Card', status: 'Pending', date: '2026-05-02' }
                  ].map((txn, idx) => (
                    <tr key={idx} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-3 font-mono text-sm">{txn.id}</td>
                      <td className="px-6 py-3 font-semibold">{txn.amount}</td>
                      <td className="px-6 py-3">{txn.method}</td>
                      <td className="px-6 py-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          txn.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {txn.status}
                        </span>
                      </td>
                      <td className="px-6 py-3">{txn.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Disputes Tab */}
        {activeTab === 'disputes' && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Dispute Management</h2>
            <div className="space-y-4">
              {[
                { id: 'DSP001', customer: 'Alice Johnson', worker: 'John Mwangi', issue: 'Work not completed', status: 'Open' },
                { id: 'DSP002', customer: 'Bob Smith', worker: 'Sarah Kipchoge', issue: 'Payment issue', status: 'Resolved' }
              ].map((dispute, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{dispute.id}</p>
                      <p className="text-gray-600 text-sm">{dispute.customer} vs {dispute.worker}</p>
                      <p className="text-gray-600 text-sm mt-1">{dispute.issue}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      dispute.status === 'Open'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {dispute.status}
                    </span>
                  </div>
                  <button className="mt-3 text-primary hover:underline text-sm">Review Details</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
