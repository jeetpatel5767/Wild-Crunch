import React from 'react';
import { User, Menu, Heart, ShoppingCart, MapPin } from 'lucide-react';
import Header from '../Header';

const Profile = () => {
  const userData = {
    name: "Kushal Patel",
    phone: "+91 9429269295",
    email: "kushal.mungalpara@gmail.com"
  };

  const addresses = [
    {
      id: 1,
      address: "2nd Floor, Matru Village Complex, Behind D-mart, Near Ankur Chowkdi, Nikol, Ahmedabad, Gujarat 382350"
    },
    {
      id: 2,
      address: "2nd Floor, Matru Village Complex, Behind D-mart, Near Ankur Chowkdi, Nikol, Ahmedabad, Gujarat 382350"
    },
    {
      id: 3,
      address: "2nd Floor, Matru Village Complex, Behind D-mart, Near Ankur Chowkdi, Nikol, Ahmedabad, Gujarat 382350"
    },
    {
      id: 4,
      address: "2nd Floor, Matru Village Complex, Behind D-mart, Near Ankur Chowkdi, Nikol, Ahmedabad, Gujarat 382350"
    },
    {
      id: 5,
      address: "2nd Floor, Matru Village Complex, Behind D-mart, Near Ankur Chowkdi, Nikol, Ahmedabad, Gujarat 382350"
    },
    {
      id: 6,
      address: "2nd Floor, Matru Village Complex, Behind D-mart, Near Ankur Chowkdi, Nikol, Ahmedabad, Gujarat 382350"
    }
  ];

  const handleEdit = (id?: number) => {
    console.log('Edit clicked', id ? `for address ${id}` : 'for profile');
  };

  const handleDelete = (id: number) => {
    console.log('Delete clicked for address', id);
  };

  return (
    <div className="min-h-screen bg-[#F8F7E5]">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 font-suez">
                  {userData.name}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-700">
                  <span className="font-jost">{userData.phone}</span>
                  <span className="hidden sm:block">•</span>
                  <span className="font-jost">{userData.email}</span>
                </div>
              </div>
              <button 
                onClick={() => handleEdit()}
                className="mt-4 sm:mt-0 bg-[#F1B213] text-white px-6 py-2 rounded-full font-medium hover:bg-[#E5A612] transition-colors font-suez"
              >
                EDIT PROFILE
              </button>
            </div>
            
            <div className="border-b border-dashed border-black"></div>
          </div>

          {/* Manage Addresses Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 font-suez">
              Manage Addresses
            </h2>
            
            {/* Address Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addresses.map((addressItem) => (
                <div 
                  key={addressItem.id}
                  className="border-2 border-dashed border-black p-6 rounded-none bg-transparent hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-black flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-black leading-relaxed font-jost">
                      {addressItem.address}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <button 
                      onClick={() => handleEdit(addressItem.id)}
                      className="text-[#F1B213] hover:text-[#E5A612] font-medium transition-colors font-suez"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(addressItem.id)}
                      className="text-[#E5A97F] hover:text-[#D4926B] font-medium transition-colors font-suez"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;