import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample auction data
const auctionItems = [
  {
    id: 1,
    image: "https://th.bing.com/th/id/OIP.0dn7YkW1PJ-WucbYX6IdtgHaE8?rs=1&pid=ImgDetMain",
    productName: "Luxury Car Model A",
    sellerName: "John Doe",
    description: "A high-end luxury car with state-of-the-art features.",
    price: "$150,000",
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/OIP.0dn7YkW1PJ-WucbYX6IdtgHaE8?rs=1&pid=ImgDetMain",
    productName: "Sports Car Model B",
    sellerName: "Jane Smith",
    description: "A sleek sports car designed for speed and elegance.",
    price: "$180,000",
  },
  {
    id: 3,
    image: "https://th.bing.com/th/id/OIP.0dn7YkW1PJ-WucbYX6IdtgHaE8?rs=1&pid=ImgDetMain",
    productName: "Classic Car Model C",
    sellerName: "Alice Johnson",
    description: "A rare classic car from the 1960s, perfect for collectors.",
    price: "$120,000",
  },
  // Add more cars as needed
];

const Cardauction = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-16">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900">Premium Auction Cars</h2>
      <Slider {...settings}>
        {auctionItems.map((item) => (
          <div key={item.id} className="p-4">
            <div className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={item.image}
                alt={item.productName}
                className="w-full h-80 object-cover rounded-2xl group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-6 w-full bg-white bg-opacity-80 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-gray-900">{item.productName}</h3>
                <p className="text-lg text-gray-700">{item.description}</p>
                <p className="mt-4 text-xl font-bold text-gray-900">{item.price}</p>
                <p className="text-sm text-gray-500 mt-2">Seller: {item.sellerName}</p>
                <button
                  onClick={() => window.open(`/auction/${item.id}`, "_blank")}
                  className="mt-4 w-full py-2 bg-primary text-white rounded-md hover:bg-green-700 transition duration-300"
                >
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cardauction;
