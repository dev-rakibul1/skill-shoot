import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A4F3D] text-white py-10 mt-24 relative">
      <div className="theme-container">
        {/* Middle Section: Subscribe Form */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <h2
            className="mb-2 text-center text-2xl md:text-4xl"
            style={{ fontWeight: "100" }}
          >
            Subscribe to get notified about updates
          </h2>
          <p className="font-thin text-xs text-center mb-4 text-[#e0fff8]">
            By subscribing with your mail, you will accept our privacy policy.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center mt-7">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-60 bg-[#345E4C] text-white rounded-t-md sm:rounded-l-md sm:rounded-tr-none sm:rounded-br-none focus:outline-none placeholder-white"
            />
            <button className="bg-[#CB8461] text-white px-6 py-2 mt-2 sm:mt-0 rounded-b-md sm:rounded-r-md sm:rounded-bl-none sm:rounded-tl-none hover:bg-[#b07356] transition-colors">
              Subscribe us
            </button>
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-28">
          {/* Left Section: Logo */}
          <div className="w-full text-center md:text-left md:w-[50%] text-xl font-bold mb-6 md:mb-0">
            Skill <span className="text-[#CB8461]">Shoot</span>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="w-full md:w-[50%] text-sm font-medium">
            <ul className="flex flex-col sm:flex-row justify-center sm:justify-end items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CB8461] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CB8461] transition-colors"
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CB8461] transition-colors"
                >
                  Subscribe
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CB8461] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CB8461] transition-colors"
                >
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* shape */}
      <div>
        <span className="absolute right-[17%] top-[35%]">
          <svg
            width="45"
            height="94"
            viewBox="0 0 89 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="32.7701"
              cy="38.9181"
              r="22.4902"
              transform="rotate(-27.3707 32.7701 38.9181)"
              stroke="#CC8663"
              stroke-width="3.64706"
            />
            <circle
              cx="55.8237"
              cy="54.3619"
              r="23.7059"
              transform="rotate(-27.3707 55.8237 54.3619)"
              stroke="#CC8663"
              stroke-opacity="0.5"
              stroke-width="1.21569"
            />
          </svg>
        </span>

        <span className="absolute left-[17%] top-[55%]">
          <svg
            width="45"
            height="39"
            viewBox="0 0 65 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.17627 1L13.7923 22.0262L27.0541 12.5515L35.7591 27.9122L52.0658 19.2533L62.6828 37.9181"
              stroke="#CC8663"
              stroke-width="4"
            />
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
