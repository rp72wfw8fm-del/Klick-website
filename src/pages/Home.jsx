import { Link } from 'react-router-dom';
import { 
  Wrench, Search, CreditCard, Star, Users, TrendingUp,
  Zap, Hammer, Palette, Leaf, Hammer as Repair,
  Scissors, Droplet, Home as HomeIcon, Briefcase,
  Globe, CheckCircle, Lock, MessageSquare, DollarSign, Award
} from 'lucide-react';

export default function Home() {
  const services = [
    { name: 'Plumbing', icon: Droplet, color: 'from-blue-500 to-blue-600', description: 'Pipe repairs, installations & maintenance' },
    { name: 'Cleaning', icon: HomeIcon, color: 'from-green-500 to-green-600', description: 'Home & office cleaning services' },
    { name: 'Tailoring', icon: Scissors, color: 'from-pink-500 to-pink-600', description: 'Alterations, repairs & custom tailoring' },
    { name: 'Electrical', icon: Zap, color: 'from-yellow-500 to-yellow-600', description: 'Wiring, repairs & installations' },
    { name: 'Carpentry', icon: Hammer, color: 'from-amber-600 to-amber-700', description: 'Furniture & structural work' },
    { name: 'Painting', icon: Palette, color: 'from-purple-500 to-purple-600', description: 'Interior & exterior painting' },
    { name: 'Landscaping', icon: Leaf, color: 'from-teal-500 to-teal-600', description: 'Garden design & maintenance' },
    { name: 'Repairs', icon: Repair, color: 'from-orange-500 to-orange-600', description: 'General repairs & maintenance' },
    { name: 'Tutoring', icon: Briefcase, color: 'from-indigo-500 to-indigo-600', description: 'Academic & skill training' },
    { name: 'Pet Care', icon: Users, color: 'from-rose-500 to-rose-600', description: 'Pet grooming & care services' },
    { name: 'Fitness', icon: Award, color: 'from-red-500 to-red-600', description: 'Personal training & coaching' },
    { name: 'Consulting', icon: Briefcase, color: 'from-slate-600 to-slate-700', description: 'Business & professional advice' }
  ];

  const features = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Global Search",
      description: "Find qualified service providers worldwide with verified ratings and reviews."
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Secure Payments",
      description: "Pay safely with M-Pesa, Airtel Money, MTN, cards, and more payment methods."
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Verified Professionals",
      description: "All service providers are verified and rated by real customers."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Worldwide Services",
      description: "Access services from professionals in every country and region."
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Direct Communication",
      description: "Chat directly with service providers before booking."
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Secure & Safe",
      description: "Your data and transactions are protected with industry-leading security."
    }
  ];

  return (
    <div>
      {/* Hero Section - Bold & Eye-Catching */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-secondary text-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                Connect with <span className="text-yellow-300">Trusted</span> Service Providers
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95 font-semibold">
                Find plumbers, cleaners, tailors, electricians, and 100+ more services worldwide. Secure payments. Verified professionals.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link to="/dashboard" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
                  Get Started Now
                </Link>
                <a href="#services" className="border-3 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
                  Explore Services
                </a>
              </div>
              <div className="mt-12 flex gap-8">
                <div>
                  <p className="text-4xl font-bold">100K+</p>
                  <p className="text-gray-200">Active Users</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">50K+</p>
                  <p className="text-gray-200">Providers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">500K+</p>
                  <p className="text-gray-200">Jobs Done</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                {services.slice(0, 4).map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className={`bg-gradient-to-br ${service.color} p-8 rounded-xl text-white text-center transform hover:scale-105 transition`}>
                      <Icon className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-bold text-lg">{service.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bold Typography */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Why Choose <span className="text-primary">Klick</span>?</h2>
            <p className="text-xl text-gray-600">The most trusted platform for connecting with service professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="card text-center hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="flex justify-center mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - With Custom Designs & Icons */}
      <section id="services" className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Services Available <span className="text-primary">Worldwide</span></h2>
            <p className="text-xl text-gray-600">Browse 100+ professional services in your area</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className={`bg-gradient-to-br ${service.color} text-white p-8 rounded-xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer group`}
                >
                  <Icon className="w-20 h-20 mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-100 font-semibold mb-4">{service.description}</p>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition w-full">
                    Browse {service.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Active Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">How <span className="text-primary">Klick</span> Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Search', description: 'Find services in your area', icon: Search },
              { step: 2, title: 'Browse', description: 'View profiles & ratings', icon: Users },
              { step: 3, title: 'Book', description: 'Confirm your booking', icon: CheckCircle },
              { step: 4, title: 'Pay', description: 'Secure payment methods', icon: CreditCard }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2 text-primary text-3xl font-bold">→</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Bold Numbers */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100K+', label: 'Active Users', icon: Users },
              { number: '50K+', label: 'Service Providers', icon: Award },
              { number: '500K+', label: 'Jobs Completed', icon: CheckCircle },
              { number: '4.9★', label: 'Average Rating', icon: Star }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <p className="text-5xl md:text-6xl font-black mb-2">{stat.number}</p>
                  <p className="text-xl font-semibold opacity-90">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Call to Action */}
      <section className="section bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and service providers using Klick to connect and grow their businesses.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition transform hover:scale-105">
              Download iOS App
            </Link>
            <Link to="/dashboard" className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition transform hover:scale-105">
              Download Android App
            </Link>
            <Link to="/dashboard" className="bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition transform hover:scale-105">
              Use Web Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
