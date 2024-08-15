import ButtonComponent from "@/utilities/Button";
import Image from "next/image";
import React from "react";
import landing from "../../../public/assets/landing.png";
import textShapeImage from "../../../public/assets/textShape.png";
import Icons from "../shared/Icons";
import CalenderIcon from "./CalenderIcon";
import "./Hero.css";
import MediaIcon from "./MediaIcon";
import PenIcons from "./PenIcons";
import UXLandCard from "./UXLandCard";

const LandingPage: React.FC = () => {
  return (
    <section className="bg-green-900 text-white">
      <div className="theme-container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div className="md:w-1/2 ">
          <h1 className="xs: text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
            There is{" "}
            <span className="relative inline-block">
              always
              <Image
                src={textShapeImage}
                className="mt-3 sm:max-w-[100px] md:max-w-full"
                width={190}
                height={20}
                alt="shape"
              />
            </span>
            <br />
            something new for us to learn
          </h1>
          <p className="sm:text-sm md:text-xl mb-6">
            we have created more than 100+ materials on various
            <br />
            things that will help your career, with mentors who are
            <br />
            experienced in their fields.
          </p>

          <div className="mx-auto md:flex justify-start items-center">
            <ButtonComponent title="Start journey" color="#DC5A01" />
            <Icons className="ml-3 mt-7 md:mt-0" />
          </div>
        </div>

        {/* Right Content */}
        <div className=" hidden md:block md:w-1/2 relative mt-8 md:mt-0 ">
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
          <div className="absolute bottom-[5%] left-[100%]  rounded-lg">
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
