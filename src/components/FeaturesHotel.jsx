import React from "react";

const FeaturesHotel = () => {
  const hotels = [
    {
      name: "The Urban Loft",
      location: "Downtown New York",
      price: 850,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400",
    },
    {
      name: "Student Plaza",
      location: "Central London",
      price: 720,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400",
    },
    {
      name: "Metro Suites",
      location: "San Francisco",
      price: 900,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=400",
    },
  ];

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
