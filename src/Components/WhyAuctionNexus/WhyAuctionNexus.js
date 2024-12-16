import React from "react";

const WhyAuctionNexus = () => {
  const features = [
    {
      id: 1,
      title: "Secure Bidding",
      description:
        "We ensure a safe and secure environment for all buyers and sellers to engage in seamless transactions.",
    },
    {
      id: 2,
      title: "Wide Range of Products",
      description:
        "From antiques to electronics, Auction Nexus connects you to a variety of categories.",
    },
    {
      id: 3,
      title: "Real-Time Auctions",
      description:
        "Participate in live auctions and experience the thrill of bidding in real-time.",
    },
    {
      id: 4,
      title: "User-Friendly Interface",
      description:
        "Our intuitive platform makes it easy for everyone to navigate and bid effortlessly.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Why Auction Nexus?</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Discover the unparalleled experience of Auction Nexus. 
          A platform designed to connect buyers and sellers with ease. 
          Bid confidently and explore endless opportunities.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Number */}
            <div className="text-4xl font-bold text-purple-800 mb-4">
              {feature.id}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAuctionNexus;
