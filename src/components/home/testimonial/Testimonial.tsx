"use client";
import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

type ITestimonialUser = {
  image: string;
  name: string;
  feedback: string;
};

const Testimonial = () => {
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null); // To reference the Swiper instance

  // State to track active arrow button
  const [activeArrow, setActiveArrow] = useState<"left" | "right" | null>(null);

  const testimonialUser: ITestimonialUser[] = [
    {
      image: "https://picsum.photos/200/300",
      name: "Jason Bay",
      feedback:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Nany Brugman",
      feedback:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Alexa Nowan",
      feedback:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Nura Nowan",
      feedback:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Nobel",
      feedback:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
  ];

  // Use useEffect to update the Swiper instance after the component mounts
  useEffect(() => {
    if (swiperRef.current && nextRef.current && prevRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.update();
    }
  }, [swiperRef, nextRef, prevRef]);

  // Handle slide direction and active button state
  const handleSlidePrev = () => {
    swiperRef.current?.slidePrev();
    setActiveArrow("left");
  };

  const handleSlideNext = () => {
    swiperRef.current?.slideNext();
    setActiveArrow("right");
  };

  return (
    <div className="mt-24">
      <article className="theme-container text-center">
        <h2 className="text-2xl md:text-4xl font-semibold leading-8 md:leading-[54px]">
          What do they
          <span className="text-[#F88C3D]"> say?</span>
        </h2>
        <p className="text-[#808080] mt-2 mx-auto w-full md:w-[60%]">
          This is an honest review from members who have joined us
        </p>
      </article>

      {/* User feedback */}
      <div className="theme-container mt-12 mx-auto relative">
        <SwiperReact
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          freeMode={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store the swiper instance
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // Small devices
            768: { slidesPerView: 2 }, // Medium devices
            1024: { slidesPerView: 3 }, // Large devices
          }}
          modules={[FreeMode, Navigation]}
        >
          {testimonialUser?.map((user: ITestimonialUser, index: number) => (
            <SwiperSlide key={index}>
              <div
                className={`${
                  index === 1 ? "bg-[#f8f8f8]" : "bg-white"
                } p-6 rounded-xl shadow-md w-full max-w-xs mx-auto text-center transition-transform duration-500 transform ${
                  index === 1 ? "scale-105 border-b-4 border-[#58b9a3]" : ""
                }`}
              >
                {/* Avatar */}
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={user.image}
                    alt={`${user.name} avatar`}
                  />
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="orange"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="none"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    ))}
                </div>

                {/* User Name */}
                <h3 className="text-lg font-normal text-[#2C2C2C]">
                  {user.name}
                </h3>

                {/* User Review */}
                <p className="text-[#808080] mt-2 text-sm leading-7">
                  {user.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </SwiperReact>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            ref={prevRef}
            onClick={handleSlidePrev} // Handle left button click
            className={`${
              activeArrow === "left"
                ? "bg-[#F88C3D] text-white"
                : "bg-white border border-gray-300 text-gray-800"
            } p-3 rounded-full shadow-md z-10`}
          >
            <AiOutlineArrowLeft className="w-4 h-4" />
          </button>
          <button
            ref={nextRef}
            onClick={handleSlideNext} // Handle right button click
            className={`${
              activeArrow === "right"
                ? "bg-[#F88C3D] text-white"
                : "bg-white border border-gray-300 text-gray-800"
            } p-3 rounded-full shadow-md z-10`}
          >
            <AiOutlineArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
