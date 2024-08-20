import ButtonComponent from "@/utilities/Button";

const SubscribeCourse = () => {
  return (
    <section className="theme-container mt-7 lg:mt-16 relative">
      <div className="py-12 lg:flex justify-around items-center bg-pink-200 px-7 rounded-md">
        <div className="max-w-full w-full lg:w-[50%]">
          <article className="text-center lg:text-left p-7 lg:p-0 flex flex-col items-center lg:items-start justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold leading-5 md:leading-[54px]">
              <span className="text-[#F88C3D]">Improve</span>, your skills, and
              reach your career as soon as possible
            </h2>
          </article>
        </div>
        <div className="relative max-w-full w-full lg:w-[50%]">
          <div className="relative  flex justify-center items-center">
            <span className="mx-2">
              <ButtonComponent title="Join now" color="#CB8461" />
            </span>
            <span className="mx-2">
              <ButtonComponent title="Subscribe Course" color="#245D51" />
            </span>
          </div>

          <div className="absolute left-[100%] bottom-[50%] lg:left-[5%] lg:bottom-[-250%] rotate-[105deg] ">
            <svg
              width="30"
              height="57"
              viewBox="0 0 56 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="49"
                height="49"
                fill="#CB8461
"
              />
              <rect x="7.5" y="8.5" width="48" height="48" stroke="#CB8461" />
            </svg>
          </div>
        </div>
      </div>

      {/* banner shape */}
      <div className="w-10 h-10 bg-teal-800 rounded-tl-lg clip-path-small-circle-1 absolute top-0 left-[15px]"></div>
      <div className="w-10 h-10 bg-teal-800 rounded-tl-lg clip-path-small-circle-2 absolute right-[15px] bottom-0"></div>
    </section>
  );
};

export default SubscribeCourse;
