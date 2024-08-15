"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";

const navItems = (
  <>
    <Link href="/home">Home</Link>
    <Link href="/course">Course</Link>
    <Link href="/subscribe">Subscribe</Link>
    <Link href="/about">About</Link>
    <Link href="/testimonial">Testimonial</Link>
  </>
);

const loginItems = (
  <>
    <Link href="/login">Login</Link>
    <Link href="/register">
      <span className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">
        Register
      </span>
    </Link>
  </>
);

const navbarTitle = (
  <div className="text-white text-lg font-bold">
    <Link href="/">
      <span className="text-white cursor-pointer">
        Skill <span className="text-orange-500">Shoot</span>
      </span>
    </Link>
  </div>
);

const navbarTitleForHamburger = (
  <div className="text-black text-lg font-bold">
    <Link href="/">
      <span className="text-black cursor-pointer">
        Skill <span className="text-orange-500">Shoot</span>
      </span>
    </Link>
  </div>
);

const Navbar: React.FC = () => {
  const [hamburgerTrigger, setHamburgerTrigger] = useState<boolean>(false);

  const handleToggleActive = () => {
    setHamburgerTrigger((prevState) => !prevState);
  };

  const handleHamburgerClose = () => {
    setHamburgerTrigger(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setHamburgerTrigger(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* hamburger overly */}
      <div
        className={`z-[5] hamburger-overlay bg-black w-full h-full absolute top-0 right-0 opacity-70 transition-opacity duration-500 ease-in-out ${
          hamburgerTrigger ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={handleHamburgerClose}
      ></div>
      <nav className="bg-green-900 p-4">
        <div className="theme-container mx-auto flex justify-between items-center">
          {navbarTitle}
          <div className="hidden md:flex space-x-8 text-white">{navItems}</div>

          <div
            className={`block md:hidden bg-white absolute top-0 left-0 max-w-full max-h-screen h-screen min-w-[200px] p-5 w-[50%] z-10 transition-transform duration-500 ease-in-out ${
              hamburgerTrigger
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            }`}
          >
            <div
              className="hamburger-close absolute top-0 right-0 p-3 mr-1 mt-1 cursor-pointer border"
              onClick={handleHamburgerClose}
            >
              <AiOutlineClose />
            </div>
            {navbarTitleForHamburger}
            <div className="flex flex-col text-pink-400">{navItems}</div>
            <div className="md:flex space-x-4 mt-7">{loginItems}</div>
          </div>

          <div className="hidden md:flex space-x-4">{loginItems}</div>
          <div
            className="md:hidden text-gray-50 cursor-pointer"
            onClick={handleToggleActive}
          >
            <AiOutlineAppstore />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
