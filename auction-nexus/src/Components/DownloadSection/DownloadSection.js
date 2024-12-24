import React from "react";

const DownloadSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-700 via-green-600 to-green-500 py-16 overflow-hidden text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-lg font-semibold uppercase tracking-widest animate-pulse">
          Download
        </h2>
        <h1 className="text-4xl font-extrabold mt-2 drop-shadow-md">
          Get Chatty Now!
        </h1>
        <p className="mt-4 text-gray-100 text-lg">
          Get started with Chatty in seconds! Download the app on Google Play,
          the App Store, or the Microsoft Store to unlock your personal AI
          assistant, ready to help you stay organized, answer questions, and
          simplify daily tasks. Chatty is just a tap away—available anytime,
          anywhere.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          {[
            {
              platform: "Google Playstore",
              icon: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg",
              bgColor: "bg-green-800",
              hoverColor: "hover:bg-green-700",
            },
            {
              platform: "Apple Appstore",
              icon: "https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg",
              bgColor: "bg-gray-800",
              hoverColor: "hover:bg-gray-700",
            },
            {
              platform: "Microsoft Store",
              icon: "https://upload.wikimedia.org/wikipedia/commons/4/49/Microsoft_logo_%282012%29.svg",
              bgColor: "bg-green-600",
              hoverColor: "hover:bg-green-500",
            },
          ].map((button, index) => (
            <a
              key={index}
              href="/"
              className={`flex items-center justify-center px-6 py-3 rounded-lg text-white font-bold transition-transform duration-300 transform ${button.bgColor} ${button.hoverColor} hover:scale-110 shadow-md`}
            >
              <img
                src={button.icon}
                alt={`${button.platform} icon`}
                className="w-6 h-6 mr-3"
              />
              {button.platform}
            </a>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-400 opacity-30 rounded-full blur-2xl animate-ping"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-700 opacity-40 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 pointer-events-none animate-pulse"></div>
    </section>
  );
};

export default DownloadSection;
