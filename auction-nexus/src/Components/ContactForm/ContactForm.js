import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap bg-gray-50 p-8 lg:p-16 gap-8">
      {/* Left Form Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Love to hear from you
        </h2>
        <p className="text-lg text-gray-600 mb-6">Get in touch!</p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name*
            </label>
            <input
              type="text"
              placeholder="Bhanu..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email*
            </label>
            <input
              type="email"
              placeholder="info@biznov.net"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message*
            </label>
            <textarea
              placeholder="Let us about your item for bid"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-green-700"
          >
            Submit Message
          </button>
        </form>
      </div>

      {/* Right Contact Details Section */}
      <div className="flex-1">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-green-600 text-xl">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <p className="text-gray-600">
              123 Main Street, <br /> CMPDI, IND 10013
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-600 text-xl">
              <i className="fas fa-phone"></i>
            </span>
            <p className="text-gray-600">
              (555) 123-4567, <br /> (111) 125-42174
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-600 text-xl">
              <i className="fas fa-clock"></i>
            </span>
            <p className="text-gray-600">
              Mon-Fri: 9 AM – 6 PM <br /> Saturday: 9 AM – 4 PM
            </p>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509413!2d144.9537353159044!3d-37.81720974202125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770b5f44db6d9b!2s123%20Main%20St%2C%20New%20York%20NY%2010013%2C%20USA!5e0!3m2!1sen!2sin!4v1614383171710!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="rounded-md shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
