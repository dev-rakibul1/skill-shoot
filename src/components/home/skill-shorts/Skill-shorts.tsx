import Image from "next/image";
import React from "react";

import CalenderIcon from "@/components/hero-section/CalenderIcon";
import MediaIcon from "@/components/hero-section/MediaIcon";
import PenIcons from "@/components/hero-section/PenIcons";
import UXLandCard from "@/components/hero-section/UXLandCard";
import FakeImage from "../../../../public/assets/Skill-short.png";

const SkillShort: React.FC = () => {
  return (
    <section className="theme-container mt-12 md:mt-24">
      <div className="flex gap-12 justify-between items-center">
        {/* Left side: Image */}
        <div className="hidden lg:block relative">
          <div className=" lg:block skill-shoot-image flex-1 flex items-center justify-center ">
            <Image
              className=""
              src={FakeImage}
              alt="cart"
              //   layout="fill"
              //   objectFit="cover"
              width={350}
              height={300}
            />
          </div>
          <div className="absolute bottom-[7.5%] right-[5%] bg-white rounded-lg z-10">
            <UXLandCard />
          </div>

          {/* shape */}
          <div className="absolute top-[10%] left-0 rounded-lg">
            <span className="landing-icons text-xs text-white">
              <MediaIcon />
            </span>
          </div>
          <div className="absolute top-[20%] right-0 rounded-lg">
            <span className="landing-icons text-xs text-white">
              <PenIcons />
            </span>
          </div>
          <div className="absolute bottom-[30%] left-[-2%] z-[11] rounded-lg">
            <span className="landing-icons text-xs text-white">
              <CalenderIcon />
            </span>
          </div>
        </div>
        {/* Right side: Text and Icons */}
        <div className="w-full md:w-[80%] lg:w-[50%] mx-auto">
          <div className="flex-1 text-center lg:text-left ">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Let us <span className="text-[#245D51]">Skill Shoot</span>
            </h1>
            <p className="text-[#808080] text-sm font-normal">
              We are a company engaged in education with the aim of improving
              the skills of many people and so that younger people can reach the
              career paths they want.
            </p>
            <p className="text-[#808080] mb-8 text-sm font-normal mt-2">
              We have been around since 2019 with currently 100+ updated
              materials and 15K members who have joined.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 mx-auto">
              <div className="flex items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 2.08334C11.4699 2.08334 10.4629 2.3888 9.6064 2.9611C8.7499 3.5334 8.08233 4.34683 7.68813 5.29853C7.29392 6.25022 7.19078 7.29745 7.39174 8.30776C7.59271 9.31808 8.08875 10.2461 8.81715 10.9745C9.54555 11.7029 10.4736 12.199 11.4839 12.3999C12.4942 12.6009 13.5414 12.4977 14.4931 12.1035C15.4448 11.7093 16.2583 11.0418 16.8306 10.1853C17.4029 9.32876 17.7083 8.32178 17.7083 7.29167C17.7083 5.91033 17.1596 4.58557 16.1828 3.60882C15.2061 2.63207 13.8813 2.08334 12.5 2.08334ZM12.5 10.4167C11.8819 10.4167 11.2777 10.2334 10.7638 9.89001C10.2499 9.54663 9.8494 9.05857 9.61288 8.48755C9.37635 7.91654 9.31447 7.2882 9.43505 6.68201C9.55562 6.07582 9.85325 5.519 10.2903 5.08196C10.7273 4.64492 11.2842 4.34729 11.8903 4.22672C12.4965 4.10614 13.1249 4.16802 13.6959 4.40455C14.2669 4.64107 14.755 5.04161 15.0983 5.55551C15.4417 6.06942 15.625 6.6736 15.625 7.29167C15.625 8.12047 15.2958 8.91533 14.7097 9.50138C14.1237 10.0874 13.3288 10.4167 12.5 10.4167ZM21.875 21.875V20.8333C21.875 18.8995 21.1068 17.0448 19.7393 15.6773C18.3719 14.3099 16.5172 13.5417 14.5833 13.5417H10.4167C8.4828 13.5417 6.62813 14.3099 5.26068 15.6773C3.89323 17.0448 3.125 18.8995 3.125 20.8333V21.875H5.20833V20.8333C5.20833 19.452 5.75707 18.1272 6.73382 17.1505C7.71057 16.1737 9.03533 15.625 10.4167 15.625H14.5833C15.9647 15.625 17.2894 16.1737 18.2662 17.1505C19.2429 18.1272 19.7917 19.452 19.7917 20.8333V21.875H21.875Z"
                    fill="#CB8461"
                  />
                </svg>

                <span className="ml-4 text-gray-800 font-semibold text-sm">
                  15K People Join
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.1355 8.63541L16.6667 13.1042L15.3125 11.7604L13.8438 13.2396L16.6563 16.0521L22.6146 10.1146L21.1355 8.63541ZM4.16671 8.33333C4.15388 8.88401 4.25289 9.43157 4.45774 9.9429C4.66259 10.4542 4.96904 10.9187 5.35853 11.3082C5.74803 11.6977 6.21248 12.0041 6.72381 12.209C7.23513 12.4138 7.78269 12.5128 8.33337 12.5C8.88406 12.5128 9.43162 12.4138 9.94294 12.209C10.4543 12.0041 10.9187 11.6977 11.3082 11.3082C11.6977 10.9187 12.0042 10.4542 12.209 9.9429C12.4139 9.43157 12.5129 8.88401 12.5 8.33333C12.5129 7.78265 12.4139 7.23509 12.209 6.72376C12.0042 6.21244 11.6977 5.74798 11.3082 5.35849C10.9187 4.96899 10.4543 4.66255 9.94294 4.45769C9.43162 4.25284 8.88406 4.15383 8.33337 4.16666C7.78269 4.15383 7.23513 4.25284 6.72381 4.45769C6.21248 4.66255 5.74803 4.96899 5.35853 5.35849C4.96904 5.74798 4.66259 6.21244 4.45774 6.72376C4.25289 7.23509 4.15388 7.78265 4.16671 8.33333ZM10.4167 8.33333C10.4301 8.61047 10.3854 8.88734 10.2854 9.14617C10.1855 9.405 10.0325 9.64006 9.83629 9.83625C9.6401 10.0324 9.40504 10.1854 9.14621 10.2854C8.88738 10.3853 8.61051 10.4301 8.33337 10.4167C8.05624 10.4301 7.77936 10.3853 7.52054 10.2854C7.26171 10.1854 7.02665 10.0324 6.83046 9.83625C6.63426 9.64006 6.48127 9.405 6.38132 9.14617C6.28136 8.88734 6.23664 8.61047 6.25004 8.33333C6.23664 8.05619 6.28136 7.77932 6.38132 7.52049C6.48127 7.26166 6.63426 7.0266 6.83046 6.83041C7.02665 6.63422 7.26171 6.48123 7.52054 6.38127C7.77936 6.28131 8.05624 6.2366 8.33337 6.25C8.61051 6.2366 8.88738 6.28131 9.14621 6.38127C9.40504 6.48123 9.6401 6.63422 9.83629 6.83041C10.0325 7.0266 10.1855 7.26166 10.2854 7.52049C10.3854 7.77932 10.4301 8.05619 10.4167 8.33333ZM4.16671 18.75C4.16671 17.9212 4.49595 17.1263 5.082 16.5403C5.66805 15.9542 6.46291 15.625 7.29171 15.625H9.37504C10.2038 15.625 10.9987 15.9542 11.5847 16.5403C12.1708 17.1263 12.5 17.9212 12.5 18.75V19.7917H14.5834V18.75C14.5834 18.066 14.4487 17.3888 14.1869 16.7569C13.9252 16.1249 13.5415 15.5508 13.0579 15.0671C12.5742 14.5835 12.0001 14.1999 11.3682 13.9381C10.7363 13.6764 10.059 13.5417 9.37504 13.5417H7.29171C5.91037 13.5417 4.58561 14.0904 3.60886 15.0671C2.63211 16.0439 2.08337 17.3687 2.08337 18.75V19.7917H4.16671V18.75Z"
                    fill="#CB8461"
                  />
                </svg>

                <span className="ml-4 text-gray-800 font-semibold text-sm">
                  Trusted Mentor
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 9.37499C18.75 8.22604 17.8157 7.29166 16.6667 7.29166H15.173L12.6542 3.09479C12.4686 2.787 12.2068 2.53223 11.8941 2.35507C11.5813 2.1779 11.2282 2.08431 10.8688 2.08333H5.20837V4.16666H10.8688L12.7438 7.29166H4.16671C3.01775 7.29166 2.08337 8.22604 2.08337 9.37499V18.75C2.08337 19.899 3.01775 20.8333 4.16671 20.8333H16.6667C17.8157 20.8333 18.75 19.899 18.75 18.75V15.625L22.9167 17.7083V10.4167L18.75 12.5V9.37499ZM16.6688 18.75H4.16671V9.37499H16.6667L16.6677 13.5417H16.6667V14.5833L16.6677 14.5844L16.6688 18.75Z"
                    fill="#CB8461"
                  />
                  <path
                    d="M6.25 14.5833H12.5V16.6667H6.25V14.5833Z"
                    fill="#CB8461"
                  />
                </svg>

                <span className="ml-4 text-gray-800 font-semibold text-sm">
                  30+ Free Videos
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 2.08333C6.75629 2.08333 2.08337 6.75625 2.08337 12.5C2.08337 18.2437 6.75629 22.9167 12.5 22.9167C18.2438 22.9167 22.9167 18.2437 22.9167 12.5C22.9167 6.75625 18.2438 2.08333 12.5 2.08333ZM12.5 20.8333C7.90525 20.8333 4.16671 17.0948 4.16671 12.5C4.16671 7.9052 7.90525 4.16666 12.5 4.16666C17.0948 4.16666 20.8334 7.9052 20.8334 12.5C20.8334 17.0948 17.0948 20.8333 12.5 20.8333Z"
                    fill="#CB8461"
                  />
                  <path
                    d="M9.375 17.7083L17.7083 12.5L9.375 7.29167V17.7083Z"
                    fill="#CB8461"
                  />
                </svg>

                <span className="ml-4 text-gray-800 font-semibold text-sm">
                  100+ Premium Videos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillShort;
