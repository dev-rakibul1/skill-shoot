"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [hamburgerTrigger, setHamburgerTrigger] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [navbarTranslate, setNavbarTranslate] =
    useState<string>("translateY(0)"); // Initial transform position
  const pathname = usePathname();

  const handleToggleActive = () => {
    setHamburgerTrigger((prevState) => !prevState);
  };

  const handleHamburgerClose = () => {
    setHamburgerTrigger(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
        setNavbarTranslate("translateY(0)"); // Move the navbar to the top smoothly
      } else if (window.scrollY > 0 && window.scrollY <= 500) {
        setNavbarTranslate("translateY(-100%)"); // Move the navbar out of view smoothly
      } else {
        setNavbarTranslate("translateY(0)"); // Default position when at the top of the page
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = (
    <>
      <Link
        href="/home"
        className={`font-normal ${
          isActive("/home") ? "text-white" : "text-gray-300"
        }`}
      >
        Home
      </Link>
      <Link
        href="/course"
        className={`font-normal ${
          isActive("/course") ? "text-white" : "text-gray-300"
        }`}
      >
        Course
      </Link>
      <Link
        href="/subscribe"
        className={`font-normal ${
          isActive("/subscribe") ? "text-white" : "text-gray-300"
        }`}
      >
        Subscribe
      </Link>
      <Link
        href="/about"
        className={`font-normal ${
          isActive("/about") ? "text-white" : "text-gray-300"
        }`}
      >
        About
      </Link>
      <Link
        href="/testimonial"
        className={`font-normal ${
          isActive("/testimonial") ? "text-white" : "text-gray-300"
        }`}
      >
        Testimonial
      </Link>
    </>
  );

  const loginItems = (
    <>
      <Link className="text-white font-normal" href="/login">
        Login
      </Link>
      <Link href="/register">
        <span className="font-normal bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">
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

  return (
    <>
      {/* hamburger overlay */}
      <div
        className={`z-[5] hamburger-overlay bg-black w-full h-full absolute top-0 right-0 opacity-70 transition-opacity duration-500 ease-in-out ${
          hamburgerTrigger ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={handleHamburgerClose}
      ></div>
      <nav
        className={`navbar p-4 fixed left-0 right-0 z-50 transition-transform duration-700 ease-in-out ${
          isSticky ? "bg-blue-900" : "bg-green-900"
        }`}
        style={{ transform: navbarTranslate }}
      >
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
