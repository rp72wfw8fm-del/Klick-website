import { ChevronDown, Search, Mail, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Support() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      category: 'Getting Started',
      question: 'How do I create an account on Klick?',
      answer: 'Download the Klick app or visit our website, click "Sign Up", and follow the steps. You can sign up as either a customer or service provider.'
    },
    {
      id: 2,
      category: 'Getting Started',
      question: 'What information do I need to provide?',
      answer: 'You need to provide your name, email, phone number, and create a password. Service providers also need to verify their identity and add their services.'
    },
    {
      id: 3,
      category: 'Payments',
      question: 'What payment methods does Klick accept?',
      answer: 'We accept M-Pesa, Airtel Money, MTN Mobile Money, and credit/debit cards. Choose your preferred method during checkout.'
    },
    {
      id: 4,
      category: 'Payments',
      question: 'Is my payment information secure?',
      answer: 'Yes! We use industry-standard encryption and partner with trusted payment providers like Pesapal to ensure your payment information is secure.'
    },
    {
      id: 5,
      category: 'Services',
      question: 'How do I book a service?',
      answer: 'Search for the service you need, view available providers, select one, choose your date and time, and complete the payment. You\'ll receive confirmation immediately.'
    },
    {
      id: 6,
      category: 'Services',
      question: 'Can I cancel a booking?',
      answer: 'Yes, you can cancel bookings up to 2 hours before the scheduled time. Cancellations made after this time may incur a cancellation fee.'
    },
    {
      id: 7,
      category: 'Ratings',
      question: 'How do ratings work?',
      answer: 'After a service is completed, both the customer and provider can rate each other on a scale of 1-5 stars and leave reviews.'
    },
    {
      id: 8,
      category: 'Disputes',
      question: 'What if I have a problem with a service?',
      answer: 'Contact our support team immediately. We have a dispute resolution process to ensure fair outcomes for both customers and providers.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl opacity-90">Find answers and get help from our support team</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email Support',
                description: 'support@klick.app',
                action: 'Send Email'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Phone Support',
                description: '0554159515 (Bitson)',
                action: 'Call Now'
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: 'Live Chat',
                description: 'Chat with our team',
                action: 'Start Chat'
              }
            ].map((contact, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-primary mb-4 flex justify-center">{contact.icon}</div>
                <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                <p className="text-gray-600 mb-4">{contact.description}</p>
                <button className="btn-primary w-full">{contact.action}</button>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <div className="text-left">
                    <p className="text-sm text-primary font-semibold mb-1">{faq.category}</p>
                    <p className="font-semibold">{faq.question}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition ${openFAQ === faq.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container mx-auto max-w-2xl">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us more..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
