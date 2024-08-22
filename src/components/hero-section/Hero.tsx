import ButtonComponent from "@/utilities/Button";
import Image from "next/image";
import React from "react";
import landing from "../../../public/assets/landing.png";
import Icons from "../shared/Icons";
import CalenderIcon from "./CalenderIcon";
import "./Hero.css";
import MediaIcon from "./MediaIcon";
import PenIcons from "./PenIcons";
import UXLandCard from "./UXLandCard";

const LandingPage: React.FC = () => {
  return (
    <section className="bg-green-900 text-white overflow-hidden">
      <div className="theme-container mx-auto flex flex-col items-center md:flex-row md:items-center justify-center md:justify-between px-6">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center py-12 md:py-12 lg:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            There is{" "}
            <span className="relative inline-block">
              always
              <img
                src="https://i.ibb.co/6nKnx1H/Vector-1.png"
                className="mt-3 max-w-full w-full absolute bottom-[-15%] left-0"
                alt="shape"
              />
            </span>
            <br />
            something new for us to learn
          </h1>
          <p className="sm:text-sm md:text-xl mb-6">
            We have created more than 100+ materials on various
            <br />
            things that will help your career, with mentors who are
            <br />
            experienced in their fields.
          </p>

          <div className="flex flex-col items-center md:flex-row justify-center md:justify-start md:items-center space-y-4 md:space-y-0 md:space-x-3">
            <ButtonComponent
              title="Start journey"
              color="#DC5A01"
              icon={true}
            />
            <Icons className="mt-2 md:mt-0" />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 relative mt-8 md:mt-0 flex justify-center hidden md:block">
          <div className="flex justify-center">
            <Image
              src={landing}
              alt="Mentor Image"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="absolute top-[50%] bg-white rounded-lg">
            <UXLandCard />
          </div>

          <div className="absolute top-[50%] right-0 rounded-lg">
            <span className="landing-icons text-xs text-white">
              <MediaIcon />
            </span>
          </div>
          <div className="absolute top-[20%] left-0 rounded-lg">
            <span className="landing-icons text-xs text-white">
              <PenIcons />
            </span>
          </div>
          <div className="absolute bottom-[5%] left-[100%] rounded-lg">
            <span className="landing-icons text-xs text-white">
              <CalenderIcon />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
