import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import moment from "moment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AuctionCarousel = () => {
  // Sample auction data with unique data for each card
  const auctionItems = [
    {
      id: 1,
      image: "https://www.mortgage-express.co.nz/hubfs/Auction2.jpg#keepProtocol",
      productName: "Antique Vase",
      sellerName: "Bhanu Pandey",
      description: "A rare antique vase from the 18th century.",
      auctionDate: moment().add(1, "days").format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 2,
      image: "https://www.mortgage-express.co.nz/hubfs/Auction3.jpg#keepProtocol",
      productName: "Vintage Watch",
      sellerName: "Sarah Lee",
      description: "A vintage watch from the 1920s.",
      auctionDate: moment().add(2, "days").format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 3,
      image: "https://www.mortgage-express.co.nz/hubfs/Auction4.jpg#keepProtocol",
      productName: "Classic Guitar",
      sellerName: "Mike Johnson",
      description: "A classic guitar, handcrafted for top-notch sound.",
      auctionDate: moment().add(3, "days").format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 4,
      image: "https://www.mortgage-express.co.nz/hubfs/Auction5.jpg#keepProtocol",
      productName: "Luxury Car",
      sellerName: "Global Motors",
      description: "A luxury car with advanced features and high performance.",
      auctionDate: moment().add(4, "days").format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 5,
      image: "https://www.mortgage-express.co.nz/hubfs/Auction6.jpg#keepProtocol",
      productName: "Gold Necklace",
      sellerName: "Jewelry World",
      description: "A 24k gold necklace with intricate design.",
      auctionDate: moment().add(5, "days").format("YYYY-MM-DD HH:mm:ss"),
    },
  ];

  // Countdown state
  const [countdowns, setCountdowns] = useState(
    auctionItems.map((item) => ({
      id: item.id,
      timeRemaining: moment(item.auctionDate).diff(moment(), "seconds"),
    }))
  );

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns((prevCountdowns) =>
        prevCountdowns.map((countdown) => ({
          ...countdown,
          timeRemaining: Math.max(countdown.timeRemaining - 1, 0),
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

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
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Auction Items</h2>
      <Slider {...settings}>
        {auctionItems.map((item) => (
          <div key={item.id} className="p-3">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
              <img
                src={item.image}
                alt={item.productName}
                className="w-full h-64 object-cover rounded-t-lg"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/800x600?text=No+Image")
                }
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.productName}
                </h3>
                <p className="text-gray-600 text-sm">Seller: {item.sellerName}</p>
                <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-800">
                    Auction Date:{" "}
                    <span className="font-semibold text-indigo-600">
                      {moment(item.auctionDate).format("MMM DD, YYYY")}
                    </span>
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    Time Remaining:{" "}
                    <span className="font-semibold text-red-600">
                      {countdowns.find((cd) => cd.id === item.id)?.timeRemaining > 0
                        ? formatTime(
                            countdowns.find((cd) => cd.id === item.id)?.timeRemaining
                          )
                        : "Auction Over"}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => window.open(`/auction/${item.id}`, "_blank")}
                  className="mt-6 w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  aria-label={`Go to auction for ${item.productName}`}
                >
                  Go to Auction
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AuctionCarousel;
