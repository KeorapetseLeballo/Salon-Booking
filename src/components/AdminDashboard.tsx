import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Star, TrendingUp, DollarSign, CheckCircle, XCircle, Phone, Mail } from 'lucide-react';

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('appointments');

  const upcomingAppointments = [
    {
      id: '1',
      clientName: 'Emily Davis',
      service: 'Haircut & Style',
      date: '2025-01-15',
      time: '10:00 AM',
      duration: '60 min',
      price: '$65',
      status: 'confirmed',
      clientPhone: '(555) 123-4567',
      clientEmail: 'emily.davis@email.com'
    },
    {
      id: '2',
      clientName: 'Michael Johnson',
      service: 'Beard Trim',
      date: '2025-01-15',
      time: '11:30 AM',
      duration: '30 min',
      price: '$25',
      status: 'confirmed',
      clientPhone: '(555) 987-6543',
      clientEmail: 'michael.j@email.com'
    },
    {
      id: '3',
      clientName: 'Sarah Wilson',
      service: 'Hair Coloring',
      date: '2025-01-15',
      time: '2:00 PM',
      duration: '120 min',
      price: '$120',
      status: 'pending',
      clientPhone: '(555) 456-7890',
      clientEmail: 'sarah.w@email.com'
    }
  ];

  const recentReviews = [
    {
      id: '1',
      clientName: 'Jennifer Lopez',
      rating: 5,
      comment: 'Absolutely amazing service! Sarah did an incredible job with my highlights.',
      service: 'Hair Coloring',
      date: '2025-01-10'
    },
    {
      id: '2',
      clientName: 'David Chen',
      rating: 5,
      comment: 'Best barber in town! Always leaves looking fresh and professional.',
      service: 'Haircut',
      date: '2025-01-08'
    },
    {
      id: '3',
      clientName: 'Lisa Brown',
      rating: 4,
      comment: 'Great experience overall. Very clean salon and friendly staff.',
      service: 'Manicure',
      date: '2025-01-05'
    }
  ];

  const stats = {
    todayAppointments: 8,
    weeklyRevenue: 1850,
    averageRating: 4.9,
    totalClients: 234
  };

  const renderAppointments = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Appointments</h2>
      {upcomingAppointments.map((appointment) => (
        <div key={appointment.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{appointment.clientName}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  appointment.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{appointment.service}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {appointment.time} ({appointment.duration})
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  {appointment.clientPhone}
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {appointment.clientEmail}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-purple-600 mb-3">{appointment.price}</div>
              <div className="flex space-x-2">
                {appointment.status === 'pending' && (
                  <>
                    <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                      <XCircle className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderReviews = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Reviews</h2>
      {recentReviews.map((review) => (
        <div key={review.id} className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{review.clientName}</h3>
              <p className="text-gray-600">{review.service}</p>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">{review.date}</span>
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );

  const renderStats = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Today's Appointments</p>
            <p className="text-2xl font-bold text-gray-900">{stats.todayAppointments}</p>
          </div>
          <Calendar className="w-8 h-8 text-purple-600" />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Weekly Revenue</p>
            <p className="text-2xl font-bold text-gray-900">${stats.weeklyRevenue}</p>
          </div>
          <DollarSign className="w-8 h-8 text-green-600" />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Average Rating</p>
            <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
          </div>
          <Star className="w-8 h-8 text-yellow-600" />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Total Clients</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalClients}</p>
          </div>
          <User className="w-8 h-8 text-blue-600" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Provider Dashboard</h1>
              <p className="text-gray-600">Welcome back, Sarah Johnson</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white px-4 py-2 rounded-lg border">
              <span className="text-sm text-gray-600">Luxe Beauty Studio</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        {renderStats()}

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('appointments')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'appointments'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Appointments
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviews
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'appointments' && renderAppointments()}
            {activeTab === 'reviews' && renderReviews()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;