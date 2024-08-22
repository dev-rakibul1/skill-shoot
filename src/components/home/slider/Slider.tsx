"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import CarouselCart from "./SliderCart";

const FakeImage =
  "https://images.unsplash.com/photo-1723764426589-fe49fc718c85?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Slider = () => {
  const courses = [
    {
      courseTitle: "Learn basic database structure",
      image:
        "https://plus.unsplash.com/premium_photo-1675198764235-2dc2b37146c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        name: "Roynaldo Jr",
        title: "Data Science",
      },
      participants: 55,
      price: 180,
      priceUnit: "$",
      videoCount: 20,
      buttonText: "Buy Now",
    },
    {
      courseTitle: "Advanced JavaScript Techniques",
      image:
        "https://images.unsplash.com/photo-1692912364084-97b9ae31a8e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        name: "Emma Watson",
        title: "Senior Web Developer",
      },
      participants: 89,
      price: 220,
      priceUnit: "$",
      videoCount: 25,
      buttonText: "Enroll Now",
    },
    {
      courseTitle: "Machine Learning Fundamentals",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        name: "Alex Chen",
        title: "AI Researcher",
      },
      participants: 120,
      price: 250,
      priceUnit: "$",
      videoCount: 30,
      buttonText: "Get Started",
    },
    {
      courseTitle: "UX/UI Design Principles",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        name: "Sophia Rodriguez",
        title: "UX Designer",
      },
      participants: 75,
      price: 199,
      priceUnit: "$",
      videoCount: 22,
      buttonText: "Join Course",
    },
    {
      courseTitle: "Blockchain Technology Explained",
      image:
        "https://plus.unsplash.com/premium_photo-1715588659510-2195c0ca5867?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        name: "Michael Johnson",
        title: "Blockchain Expert",
      },
      participants: 60,
      price: 210,
      priceUnit: "$",
      videoCount: 18,
      buttonText: "Start Learning",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  // State to track active arrow button
  const [activeArrow, setActiveArrow] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    if (swiperRef.current && nextRef.current && prevRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.update();
    }
  }, [swiperRef, nextRef, prevRef]);

  const handleSlidePrev = () => {
    swiperRef.current?.slidePrev();
    setActiveArrow("left");
  };

  const handleSlideNext = () => {
    swiperRef.current?.slideNext();
    setActiveArrow("right");
  };

  return (
    <>
      <div className="bg-[#245D51]">
        <div className="theme-container p-5 relative">
          {" "}
          {/* Make this div relative */}
          <div className="text-center py-7">
            {/* Slider title */}
            <h2 className="font-semibold text-2xl md:text-4xl text-gray-300 md:leading-[54px]">
              Popular courses of the week
            </h2>
            <p className="mt-3 w-full md:w-[30%] mx-auto text-gray-300">
              List of the most popular lists that are often studied by our
              members
            </p>
          </div>
          <div className="rounded-lg overflow-hidden relative">
            {/* Cart article part */}
            <div className="mt-5 p-3">
              <SwiperReact
                slidesPerView={1} // Default to 1 slide per view
                spaceBetween={10}
                freeMode={true}
                loop={true}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                breakpoints={{
                  140: { slidesPerView: 1 }, // Extra small devices
                  640: { slidesPerView: 1 }, // Small devices
                  768: { slidesPerView: 2 }, // Medium devices
                  1024: { slidesPerView: 3 }, // Large devices
                }}
                modules={[FreeMode, Navigation]}
              >
                {courses?.map((course, index) => (
                  <SwiperSlide key={index}>
                    <CarouselCart {...course} />
                  </SwiperSlide>
                ))}
              </SwiperReact>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex justify-between items-center">
            <button
              ref={prevRef}
              onClick={handleSlidePrev} // Handle left button click
              className={`${
                activeArrow === "left"
                  ? "bg-[#245D51] text-white border-4"
                  : "bg-white text-gray-800 border-4 border-[transparent]"
              } p-3 rounded-full shadow-md z-10 `}
            >
              <AiOutlineArrowLeft className="w-4 h-4" />
            </button>
            <button
              ref={nextRef}
              onClick={handleSlideNext} // Handle right button click
              className={`${
                activeArrow === "right"
                  ? "bg-[#245D51] text-white border-4"
                  : "bg-white border-4 border-[transparent] text-gray-800"
              } p-3 rounded-full shadow-md z-10`}
            >
              <AiOutlineArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className=" p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <span>&times;</span>
            </button>
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-6">This is the content of the modal.</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
