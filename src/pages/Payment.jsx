import { useState } from 'react';
import { CreditCard, Smartphone, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState('');

  const paymentMethods = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      icon: '📱',
      description: 'Pay with M-Pesa',
      fee: '2%',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Rwanda']
    },
    {
      id: 'airtel',
      name: 'Airtel Money',
      icon: '💳',
      description: 'Pay with Airtel Money',
      fee: '2.5%',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Malawi']
    },
    {
      id: 'mtn_mobile',
      name: 'MTN Mobile Money',
      icon: '📲',
      description: 'Pay with MTN Mobile Money',
      fee: '2.5%',
      countries: ['Ghana', 'Cameroon', 'Côte d\'Ivoire', 'Nigeria']
    },
    {
      id: 'mtn_cash',
      name: 'MTN Cash',
      icon: '💰',
      description: 'Pay with MTN Cash',
      fee: '2%',
      countries: ['Ghana', 'Cameroon', 'Uganda']
    },
    {
      id: 'telecel',
      name: 'Telecel Cash',
      icon: '🏧',
      description: 'Pay with Telecel Cash',
      fee: '2.5%',
      countries: ['Ghana', 'Zimbabwe']
    },
    {
      id: 'card',
      name: 'Debit/Credit Card',
      icon: '💳',
      description: 'Pay with your card',
      fee: '3.5%',
      countries: ['Worldwide']
    }
  ];

  const handlePayment = (e) => {
    e.preventDefault();
    if (!selectedMethod || !amount) {
      alert('Please select a payment method and enter an amount');
      return;
    }
    alert(`Processing payment of $${amount} via ${selectedMethod}...`);
  };

  return (
    <div>
      <Navigation />
      
      <section className="section bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-black mb-2">Payment Methods</h1>
          <p className="text-gray-600 mb-8">Choose your preferred payment method</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-6 rounded-lg border-2 transition ${
                        selectedMethod === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-4xl mb-2">{method.icon}</div>
                      <h3 className="font-bold text-lg">{method.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                      <p className="text-xs text-gray-500">Fee: {method.fee}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Available in: {method.countries.join(', ')}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Form */}
              {selectedMethod && (
                <div className="bg-white p-8 rounded-lg shadow-md mt-6">
                  <h3 className="text-xl font-bold mb-6">
                    Enter Payment Details
                  </h3>
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Amount (USD)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-2.5 text-gray-500">$</span>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.00"
                          step="0.01"
                          min="0"
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+233 55 415 9515"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Amount:</strong> ${amount || '0.00'}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Fee:</strong> ${(parseFloat(amount || 0) * 0.025).toFixed(2)}
                      </p>
                      <p className="text-lg font-bold text-blue-600 mt-2">
                        Total: ${(parseFloat(amount || 0) * 1.025).toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                    >
                      Proceed to Payment
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h3 className="text-xl font-bold mb-4">Payment Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Selected Method</p>
                  <p className="font-bold">
                    {selectedMethod
                      ? paymentMethods.find(m => m.id === selectedMethod)?.name
                      : 'None selected'}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-bold">${amount || '0.00'}</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">Fee</p>
                  <p className="font-bold">
                    ${(parseFloat(amount || 0) * 0.025).toFixed(2)}
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${(parseFloat(amount || 0) * 1.025).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  ✓ Secure payment processing
                </p>
                <p className="text-sm text-green-700">
                  ✓ Instant confirmation
                </p>
                <p className="text-sm text-green-700">
                  ✓ Money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
