import { Link } from 'react-router-dom';
import { Wrench, Search, CreditCard, Star, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Connect with Trusted Service Providers</h1>
          <p className="text-xl mb-8 opacity-90">Book plumbers, cleaners, tailors, electricians, and more in minutes. Secure payments with mobile money.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started
            </Link>
            <a href="#features" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Klick?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-12 h-12 text-primary" />,
                title: "Easy Search",
                description: "Find qualified service providers in your area with verified ratings and reviews."
              },
              {
                icon: <CreditCard className="w-12 h-12 text-primary" />,
                title: "Secure Payments",
                description: "Pay safely with M-Pesa, Airtel Money, MTN Mobile Money, or credit card."
              },
              {
                icon: <Star className="w-12 h-12 text-primary" />,
                title: "Verified Professionals",
                description: "All service providers are verified and rated by real customers."
              },
              {
                icon: <Wrench className="w-12 h-12 text-primary" />,
                title: "Wide Range of Services",
                description: "From plumbing to tailoring, find any service you need."
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Direct Communication",
                description: "Chat directly with service providers before booking."
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-primary" />,
                title: "Transparent Pricing",
                description: "No hidden fees. See exact pricing before confirming your booking."
              }
            ].map((feature, idx) => (
              <div key={idx} className="card text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Services Available</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Plumbing', 'Cleaning', 'Tailoring', 'Electrical', 'Carpentry', 'Painting', 'Landscaping', 'Repairs'].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition">
                <p className="font-semibold text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '5K+', label: 'Service Providers' },
              { number: '50K+', label: 'Jobs Completed' },
              { number: '4.8★', label: 'Average Rating' }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Download the Klick app or use our web platform to book services today.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary">Download iOS App</a>
            <a href="#" className="btn-primary">Download Android App</a>
            <Link to="/dashboard" className="btn-secondary">Use Web Platform</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
