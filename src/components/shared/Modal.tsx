"use client";

import { AiOutlineClose } from "react-icons/ai"; // Importing the close icon
import { CSSTransition } from "react-transition-group";

function Modal({
  isModalOpen,
  setIsModalOpen,
  openModal,
  closeModal,
  title,
}: any) {
  return (
    <div className="">
      {/* Modal */}
      <CSSTransition
        in={isModalOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-[50%] w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose size={24} /> {/* Close Icon */}
            </button>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="mb-6">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Jm0MLlE4x0U?si=8Je1ZbD0nJjpIhuM"
                title="YouTube video player"
                // @ts-ignore
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </p>
            {/* <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close Modal
            </button> */}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Modal;
