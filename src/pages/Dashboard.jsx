import { useState } from 'react';
import { Search, MapPin, Star, MessageSquare, Clock, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const [userType, setUserType] = useState('customer');
  const [searchQuery, setSearchQuery] = useState('');

  const workers = [
    {
      id: 1,
      name: 'John Mwangi',
      service: 'Plumbing',
      rating: 4.9,
      reviews: 128,
      price: 'KES 2,500/hour',
      location: '2.5 km away',
      image: '👨‍🔧'
    },
    {
      id: 2,
      name: 'Sarah Kipchoge',
      service: 'House Cleaning',
      rating: 4.8,
      reviews: 95,
      price: 'KES 1,500/hour',
      location: '1.2 km away',
      image: '👩‍🔧'
    },
    {
      id: 3,
      name: 'David Kariuki',
      service: 'Electrical Work',
      rating: 4.7,
      reviews: 112,
      price: 'KES 3,000/hour',
      location: '3.1 km away',
      image: '👨‍🔧'
    },
    {
      id: 4,
      name: 'Grace Mutua',
      service: 'Tailoring',
      rating: 4.9,
      reviews: 87,
      price: 'KES 800/item',
      location: '0.8 km away',
      image: '👩‍🔧'
    }
  ];

  const recentJobs = [
    {
      id: 1,
      service: 'Pipe Repair',
      worker: 'John Mwangi',
      date: '2026-05-02',
      status: 'Completed',
      amount: 'KES 5,000'
    },
    {
      id: 2,
      service: 'House Cleaning',
      worker: 'Sarah Kipchoge',
      date: '2026-04-28',
      status: 'Completed',
      amount: 'KES 4,500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* User Type Selector */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-4">
            <button
              onClick={() => setUserType('customer')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                userType === 'customer'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              I Need a Service
            </button>
            <button
              onClick={() => setUserType('worker')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                userType === 'worker'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              I'm a Service Provider
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {userType === 'customer' ? (
          <>
            {/* Search Section */}
            <div className="mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Find a Service Provider</h2>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Search by service (e.g., plumbing, cleaning)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="btn-primary">Search</button>
                </div>
              </div>
            </div>

            {/* Workers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {workers.map((worker) => (
                <div key={worker.id} className="card">
                  <div className="text-5xl mb-4">{worker.image}</div>
                  <h3 className="font-bold text-lg mb-1">{worker.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{worker.service}</p>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{worker.rating}</span>
                    <span className="text-gray-600 text-sm">({worker.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    {worker.location}
                  </div>

                  <p className="font-semibold text-primary mb-4">{worker.price}</p>

                  <div className="flex gap-2">
                    <button className="flex-1 btn-primary text-sm">Book Now</button>
                    <button className="flex-1 btn-outline text-sm">Message</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Jobs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">Your Recent Jobs</h3>
              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{job.service}</p>
                      <p className="text-gray-600 text-sm">with {job.worker}</p>
                      <p className="text-gray-500 text-sm">{job.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{job.amount}</p>
                      <p className="text-green-600 text-sm flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> {job.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Worker Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Active Jobs', value: '3', icon: '📋' },
                { label: 'Total Earnings', value: 'KES 45,000', icon: '💰' },
                { label: 'Rating', value: '4.8★', icon: '⭐' }
              ].map((stat, idx) => (
                <div key={idx} className="card text-center">
                  <p className="text-4xl mb-2">{stat.icon}</p>
                  <p className="text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Pending Jobs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">Pending Job Requests</h3>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    customer: 'Alice Johnson',
                    service: 'Bathroom Plumbing',
                    location: 'Nairobi, Westlands',
                    budget: 'KES 5,000',
                    time: '2 hours ago'
                  },
                  {
                    id: 2,
                    customer: 'Bob Smith',
                    service: 'Kitchen Sink Repair',
                    location: 'Nairobi, Kilimani',
                    budget: 'KES 3,500',
                    time: '30 minutes ago'
                  }
                ].map((job) => (
                  <div key={job.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold">{job.service}</p>
                        <p className="text-gray-600 text-sm">from {job.customer}</p>
                      </div>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{job.time}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </p>
                    <p className="font-bold text-primary mb-3">{job.budget}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 btn-primary text-sm">Accept</button>
                      <button className="flex-1 btn-outline text-sm">Decline</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
