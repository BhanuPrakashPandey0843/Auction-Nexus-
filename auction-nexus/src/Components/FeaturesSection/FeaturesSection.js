import React from "react";
import { FaClock, FaBolt, FaUser, FaSync, FaChartBar, FaGraduationCap } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      title: "24/7 Availability",
      description:
        "Always online for instant assistance, enhancing productivity and ensuring support whenever you need it.",
      icon: <FaClock />,
    },
    {
      title: "Instant Responses",
      description:
        "Get answers in seconds, reducing wait times and improving overall efficiency in your interactions.",
      icon: <FaBolt />,
    },
    {
      title: "Personalized Interactions",
      description:
        "Adapts to your preferences, delivering tailored experiences that meet your unique needs and expectations.",
      icon: <FaUser />,
    },
    {
      title: "Task Automation",
      description:
        "Streamline up to 70% of routine tasks, freeing up time for more important activities and boosting productivity.",
      icon: <FaSync />,
    },
    {
      title: "Scalable for All Needs",
      description:
        "Designed to accommodate diverse requirements, from personal use to comprehensive customer support solutions.",
      icon: <FaChartBar />,
    },
    {
      title: "Continuous Learning",
      description:
        "Improves with every interaction, offering smarter solutions and enhanced performance over time for users.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg font-semibold text-[#155436] uppercase tracking-wide">
          Features
        </h2>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
          Discover the Power of Chatty
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Experience the AI ChatBot trusted by over 10,000 users, delivering
          24/7 support and automating up to 70% of routine tasks. Get responses
          90% faster and enjoy personalized assistance, tailored to make every
          interaction seamless.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:border-[#155436] hover:border-2"
            >
              <div className="text-[#155436] text-5xl mb-4 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#155436]">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
