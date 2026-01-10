import React from "react";

const FeaturesHotel = () => {
  const hotels =[
  {
    id: "1",
    name: "Grand Plaza Hotel",
    location: "Mumbai, Maharashtra",
    dailyPrice: 1500,
    monthlyPrice: 35000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1723465308831-29da05e011f3?w=800",
  },
  {
    id: "2",
    name: "Boutique Residency",
    location: "Bangalore, Karnataka",
    dailyPrice: 1200,
    monthlyPrice: 28000,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1649731000184-7ced04998f44?w=800",
  },
  {
    id: "3",
    name: "Sunset Resort",
    location: "Goa",
    dailyPrice: 2000,
    monthlyPrice: 45000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
  },
  {
    id: "4",
    name: "City Apartments",
    location: "Delhi",
    dailyPrice: 1800,
    monthlyPrice: 40000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1633294157464-2a2ace9e5412?w=800",
  },
  {
    id: "5",
    name: "Business Inn",
    location: "Pune, Maharashtra",
    dailyPrice: 1400,
    monthlyPrice: 32000,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1608022099316-02dbaebb4d7e?w=800",
  },
  {
    id: "6",
    name: "Cozy Stays",
    location: "Hyderabad, Telangana",
    dailyPrice: 1100,
    monthlyPrice: 26000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1647792855184-af42f1720b91?w=800",
  },
]

  return (
    <section className="pb-20 px-10">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-2xl font-bold text-heading">Featured Hotels</h3>
        <a href="#" className="text-primary font-semibold text-sm">
          View all →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg">{hotel.name}</h4>
                <span className="text-primary text-sm font-bold">
                  ★ {hotel.rating}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">📍 {hotel.location}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <p className="font-bold text-heading">
                  ${hotel.price}
                  <span className="text-gray-400 font-normal">/month</span>
                </p>
                <button className="text-primary text-sm font-semibold">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesHotel;
