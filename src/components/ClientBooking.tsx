import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Star, User, CreditCard } from 'lucide-react';

interface ClientBookingProps {
  onBack: () => void;
}

const ClientBooking: React.FC<ClientBookingProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: 'haircut', name: 'Haircut & Style', duration: '60 min', price: '$65' },
    { id: 'color', name: 'Hair Coloring', duration: '120 min', price: '$120' },
    { id: 'manicure', name: 'Manicure', duration: '45 min', price: '$35' },
    { id: 'pedicure', name: 'Pedicure', duration: '60 min', price: '$45' },
    { id: 'makeup', name: 'Makeup Application', duration: '45 min', price: '$55' },
    { id: 'facial', name: 'Facial Treatment', duration: '75 min', price: '$85' }
  ];

  const providers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      specialty: 'Hair Stylist',
      rating: 4.9,
      reviews: 127,
      salon: 'Luxe Beauty Studio',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '2',
      name: 'Maria Rodriguez',
      specialty: 'Nail Technician',
      rating: 4.8,
      reviews: 94,
      salon: 'Style & Grace',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '3',
      name: 'James Wilson',
      specialty: 'Barber',
      rating: 4.9,
      reviews: 156,
      salon: 'Urban Cuts',
      image: 'https://images.pexels.com/photos/3785106/pexels-photo-3785106.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })
      });
    }
    return dates;
  };

  const dates = generateDates();

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose a Service</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedService === service.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    <span className="text-lg font-bold text-purple-600">{service.price}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose a Provider</h2>
            <div className="space-y-4">
              {providers.map((provider) => (
                <div
                  key={provider.id}
                  onClick={() => setSelectedProvider(provider.id)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedProvider === provider.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                      <p className="text-gray-600">{provider.specialty}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-semibold">{provider.rating}</span>
                          <span className="text-gray-500 ml-1">({provider.reviews})</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{provider.salon}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Dates</h3>
              <div className="grid grid-cols-7 gap-2">
                {dates.map((date) => (
                  <button
                    key={date.date}
                    onClick={() => setSelectedDate(date.date)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      selectedDate === date.date
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    <div className="text-sm">{date.display}</div>
                  </button>
                ))}
              </div>
            </div>
            
            {selectedDate && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Times</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedTime === time
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        const selectedServiceData = services.find(s => s.id === selectedService);
        const selectedProviderData = providers.find(p => p.id === selectedProvider);
        const selectedDateData = dates.find(d => d.date === selectedDate);
        
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm Booking</h2>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-semibold">{selectedServiceData?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Provider:</span>
                  <span className="font-semibold">{selectedProviderData?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">{selectedDateData?.display}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{selectedServiceData?.duration}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-purple-600">{selectedServiceData?.price}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <CreditCard className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800">Payment Information</h3>
              </div>
              <p className="text-green-700">Payment will be processed securely at the salon. You can pay with cash, card, or digital payment methods.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedService !== '';
      case 2: return selectedProvider !== '';
      case 3: return selectedDate !== '' && selectedTime !== '';
      case 4: return true;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Handle booking confirmation
      alert('Booking confirmed! You will receive a confirmation email shortly.');
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Book Appointment</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center mb-8">
          {[1, 2, 3, 4].map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNumber
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step > stepNumber ? 'bg-purple-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {step === 4 ? 'Confirm Booking' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientBooking;