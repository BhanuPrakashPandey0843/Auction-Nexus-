import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get started with Chatty?",
      answer:
        "Simply download the app from Google Play or the App Store, follow the setup guide, and start using Chatty instantly.",
    },
    {
      question: "Is Chatty available in multiple languages?",
      answer:
        "Yes, Chatty supports multiple languages. You can customize your language preferences in the settings.",
    },
    {
      question: "Can AI cancel my subscription?",
      answer:
        "No, subscription cancellations need to be done manually through your account settings.",
    },
    {
      question: "Can I customize Chatty’s responses to fit my needs?",
      answer:
        "Absolutely! Chatty offers customization options to tailor responses based on your preferences.",
    },
    {
      question: "What types of tasks can Chatty assist with?",
      answer:
        "Chatty can assist with scheduling, answering questions, generating content, and much more.",
    },
    {
      question: "What kind of support is available if I encounter issues?",
      answer:
        "You can contact our 24/7 support team via email or live chat for assistance.",
    },
    {
      question: "Can Chatty generate images?",
      answer:
        "Yes, Chatty can generate images based on your descriptions using advanced AI capabilities.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-lg font-semibold text-blue-600 tracking-wide uppercase">
          FAQs
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Have Questions?
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
          Our FAQ section covers everything you need to know about Chatty. Find quick, helpful answers to your most pressing questions.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ${
                activeIndex === index ? "border-l-4 border-blue-500" : ""
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="mr-3 text-blue-500">&#x2756;</span> {/* Icon */}
                  {faq.question}
                </h3>
                <button
                  className={`text-blue-500 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {activeIndex === index ? "–" : "+"}
                </button>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 animate-fadeIn">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
