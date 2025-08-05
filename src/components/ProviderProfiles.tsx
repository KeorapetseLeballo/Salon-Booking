import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Clock, Phone, Mail, Filter, Search } from 'lucide-react';

interface ProviderProfilesProps {
  onBack: () => void;
}

const ProviderProfiles: React.FC<ProviderProfilesProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const providers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      specialty: 'Hair Stylist',
      category: 'hair',
      rating: 4.9,
      reviews: 127,
      salon: 'Luxe Beauty Studio',
      location: 'Downtown',
      experience: '8 years',
      phone: '(555) 123-4567',
      email: 'sarah.j@luxebeauty.com',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      services: ['Haircut & Style', 'Hair Coloring', 'Highlights', 'Keratin Treatment'],
      bio: 'Passionate hair stylist with 8+ years of experience in cutting-edge techniques and color theory.',
      recentReviews: [
        { client: 'Emily R.', rating: 5, comment: 'Amazing highlights! Sarah really knows her colors.' },
        { client: 'Jessica M.', rating: 5, comment: 'Best haircut I\'ve ever had. Will definitely be back!' }
      ]
    },
    {
      id: '2',
      name: 'Maria Rodriguez',
      specialty: 'Nail Technician',
      category: 'nails',
      rating: 4.8,
      reviews: 94,
      salon: 'Style & Grace',
      location: 'Midtown',
      experience: '5 years',
      phone: '(555) 987-6543',
      email: 'maria.r@styleandgrace.com',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      services: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Polish'],
      bio: 'Creative nail artist specializing in intricate designs and healthy nail care.',
      recentReviews: [
        { client: 'Lisa K.', rating: 5, comment: 'Incredible nail art! Maria is so talented and detailed.' },
        { client: 'Amanda S.', rating: 4, comment: 'Great manicure, very relaxing experience.' }
      ]
    },
    {
      id: '3',
      name: 'James Wilson',
      specialty: 'Master Barber',
      category: 'barber',
      rating: 4.9,
      reviews: 156,
      salon: 'Urban Cuts',
      location: 'East Side',
      experience: '12 years',
      phone: '(555) 456-7890',
      email: 'james.w@urbancuts.com',
      image: 'https://images.pexels.com/photos/3785106/pexels-photo-3785106.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      services: ['Classic Cuts', 'Beard Trimming', 'Hot Towel Shave', 'Hair Styling'],
      bio: 'Master barber with traditional techniques and modern styling expertise.',
      recentReviews: [
        { client: 'Mark T.', rating: 5, comment: 'James gives the best hot towel shaves in the city!' },
        { client: 'Robert L.', rating: 5, comment: 'Consistent quality, great conversation, highly recommend.' }
      ]
    },
    {
      id: '4',
      name: 'Isabella Chen',
      specialty: 'Makeup Artist',
      category: 'makeup',
      rating: 4.7,
      reviews: 78,
      salon: 'Beauty Lounge',
      location: 'West End',
      experience: '6 years',
      phone: '(555) 321-9876',
      email: 'isabella.c@beautylounge.com',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      services: ['Bridal Makeup', 'Special Events', 'Photo Shoots', 'Makeup Lessons'],
      bio: 'Professional makeup artist specializing in bridal and special occasion looks.',
      recentReviews: [
        { client: 'Rachel P.', rating: 5, comment: 'Perfect bridal makeup! Isabella made me feel so beautiful.' },
        { client: 'Sophie G.', rating: 4, comment: 'Great for special events, very professional service.' }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Providers', count: providers.length },
    { id: 'hair', name: 'Hair Stylists', count: providers.filter(p => p.category === 'hair').length },
    { id: 'nails', name: 'Nail Technicians', count: providers.filter(p => p.category === 'nails').length },
    { id: 'barber', name: 'Barbers', count: providers.filter(p => p.category === 'barber').length },
    { id: 'makeup', name: 'Makeup Artists', count: providers.filter(p => p.category === 'makeup').length }
  ];

  const filteredProviders = providers.filter(provider => {
    const matchesCategory = selectedCategory === 'all' || provider.category === selectedCategory;
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.salon.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Find Providers</h1>
            <p className="text-gray-600">Discover top-rated beauty professionals in your area</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search providers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-100 text-purple-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Providers Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProviders.map((provider) => (
                <div key={provider.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  {/* Provider Header */}
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
                        <p className="text-purple-600 font-medium">{provider.specialty}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="font-semibold">{provider.rating}</span>
                            <span className="text-gray-500 ml-1">({provider.reviews})</span>
                          </div>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-600">{provider.experience} experience</span>
                        </div>
                      </div>
                    </div>

                    {/* Salon Info */}
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{provider.salon}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span>{provider.location}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-700 mb-4">{provider.bio}</p>

                    {/* Services */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.services.map((service, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recent Reviews */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Recent Reviews:</h4>
                      <div className="space-y-2">
                        {provider.recentReviews.map((review, index) => (
                          <div key={index} className="text-sm">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-gray-900">{review.client}</span>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-600">"{review.comment}"</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex space-x-4">
                        <a
                          href={`tel:${provider.phone}`}
                          className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          <span className="text-sm">Call</span>
                        </a>
                        <a
                          href={`mailto:${provider.email}`}
                          className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-1" />
                          <span className="text-sm">Email</span>
                        </a>
                      </div>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProviders.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No providers found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfiles;