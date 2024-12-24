import React, { useState, useEffect } from "react";

const ResponsiveCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Welcome to Our Services",
      description: "Carousel with TailwindCSS and React",
      image:
        "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80",
      buttonText: "Contact Us",
    },
    {
      id: 2,
      title: "Your Trusted Partner",
      description: "We deliver quality with every project.",
      image:
        "https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      buttonText: "Learn More",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-center px-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-lg md:text-2xl text-white mb-6">
              {slide.description}
            </p>
            <button className="bg-purple-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
        >
          ❯
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide
                ? "bg-purple-800"
                : "bg-gray-400 hover:bg-purple-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;


