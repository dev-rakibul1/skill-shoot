import ButtonComponent from "@/utilities/Button";
import Image from "next/image";
import Katerina from "../../../../public/assets/Katerina.png";
import CourseShape from "./Course-shape";

const Course = () => {
  return (
    <section className="theme-container mt-7 lg:mt-40 relative">
      <div className="flex justify-around items-center bg-pink-200 px-7 rounded-md">
        <div className="max-w-full lg:w-[50%]">
          <article className="text-center lg:text-left py-12 md:p-12 lg:p-0 flex flex-col items-center lg:items-start justify-center">
            <h2 className="mb-3 md:mb-0 text-2xl md:text-4xl font-semibold leading-8 md:leading-[54px]">
              Happy <span className="text-[#F88C3D]">Chinese New Year</span>,
              20% discount for you today{" "}
            </h2>
            <ButtonComponent title="Subscribe Course" color="#245D51" />
          </article>
        </div>
        <div className="hidden lg:block max-w-full lg:w-[50%]">
          <div className="relative  flex justify-center items-center">
            <Image src={Katerina} alt="user" className="mt-[-134px]" />

            {/* shape */}
            <CourseShape />
          </div>
        </div>
      </div>

      {/* banner shape */}
      <div className="w-10 h-10 bg-teal-800 rounded-tl-lg clip-path-small-circle-1 absolute top-0 left-[15px]"></div>
      <div className="w-10 h-10 bg-teal-800 rounded-tl-lg clip-path-small-circle-2 absolute right-[15px] bottom-0"></div>
    </section>
  );
};

export default Course;
