import Image from "next/image";
import User from "../../../../public/assets/User-2.png";

const WhyDoWeExistSection = () => {
  return (
    <>
      <section className="theme-container mx-auto px-4 py-10 lg:flex lg:space-x-10 mt-7 sm:mt-24">
        {/* Left Column */}
        <div className="lg:w-1/2 ">
          <h2 className="text-2xl md:text-4xl font-semibold text-center lg:text-left mb-6">
            Why do we <span className="text-[#F88C3D]">exist?</span>
          </h2>
          <p className="mx-auto lg:mx-0 w-full md:w-[70%] text-center lg:text-left mb-6 text-[#808080] leading-[35px] text-md ">
            Because we know that many people or companies have the same problem
            when it comes to how difficult it is to improve their skills.
          </p>
          <div className="flex lg:justify-start justify-center items-center mb-8 ">
            <Image
              src={User} // Replace with the actual image path
              alt="Jerony Pulquosta"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Jerony Pulquosta</p>
              <p className="text-gray-500 text-sm">CEO Skill Shoot</p>
            </div>
          </div>
          <hr className="border-gray-300 mb-8" />
          <div className="flex space-x-10 lg:justify-start justify-center">
            <div className="text-center">
              <p className="text-xl md:text-3xl font-bold">100+</p>
              <p className="text-gray-500 text-sm">Updated Material</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-3xl font-bold">15K</p>
              <p className="text-gray-500 text-sm">Member Join</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 grid xs:grid-cols-1 sm:grid-col-2 md:grid-cols-2 gap-6 mt-10 lg:mt-0">
          {/* Feature 1 */}
          <div className="text-center md:text-left ">
            <div className="p-4 rounded-md inline-block mb-4">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.9999 0L38.4615 11.5385H0L11.5384 0L49.9999 0Z"
                  fill="#C9F87C"
                />
                <rect
                  y="11.5383"
                  width="38.4615"
                  height="38.4615"
                  fill="#6BCD49"
                />
                <path
                  d="M50.0004 38.4614V0.000244141L38.4619 11.5386V49.9998L50.0004 38.4614Z"
                  fill="#5EBA3F"
                />
              </svg>

              {/* Replace with actual icon path */}
            </div>
            <h3 className="text-[#245D51] text-xl leading-[36px] font-semibold">
              Material Limitations
            </h3>
            <p className="text-[#808080] leading-[35px] text-md ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center md:text-left">
            <div className=" p-4 rounded-md inline-block mb-4">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_547)">
                  <path
                    d="M50 37.0713L25 0L0 37.0713L25 50L50 37.0713Z"
                    fill="#DE78F0"
                  />
                  <path d="M50 37.0713L25 0V50L50 37.0713Z" fill="#BF4CD9" />
                  <path
                    d="M25 24.1426L0 37.0713L25 50L50 37.0713L25 24.1426Z"
                    fill="#A934C4"
                  />
                  <path
                    d="M25 24.1426V50L50 37.0713L25 24.1426Z"
                    fill="#9430A1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_547">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-[#245D51] text-xl leading-[36px] font-semibold">
              Unprofessional Mentor
            </h3>
            <p className="text-[#808080] leading-[35px] text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center md:text-left">
            <div className=" p-4 rounded-md inline-block mb-4">
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_567)">
                  <path
                    d="M11.8164 25.8361C11.8164 15.9957 18.357 7.36916 27.6252 4.67415L29.3908 1.23391C27.9415 0.977661 26.4674 0.83606 25 0.83606C11.2686 0.83606 0 12.1046 0 25.8361C0 39.5675 11.2686 50.8361 25 50.8361C26.4689 50.8361 27.9449 50.6945 29.396 50.4375L29.0827 47.2864C19.0464 45.1028 11.8164 36.1868 11.8164 25.8361Z"
                    fill="#7CAEF8"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.6793 3.9906L37.3047 4.21501C45.0682 8.58025 50 16.7542 50 25.8361C50 27.2995 49.8485 28.7832 49.5908 30.2257L49.5892 30.2247L49.5898 30.2306L49.5604 30.4944C49.2089 32.3693 48.5255 34.2442 47.7051 36.0606C47.7051 36.0606 47.7051 36.0607 47.7052 36.0607C47.6614 36.1626 47.6105 36.2717 47.5596 36.3809C47.5081 36.4915 47.4565 36.6022 47.4123 36.7053V36.7344C47.3976 36.7785 47.3756 36.8152 47.3536 36.8519C47.3316 36.8885 47.3096 36.9251 47.295 36.9689C46.9141 37.7306 46.4748 38.4631 46.0352 39.1955C45.7717 39.6056 45.4786 40.0158 45.1563 40.4258H45.1563C44.9512 40.7482 44.7167 41.0705 44.4531 41.3927C44.0723 41.8614 43.6914 42.301 43.2519 42.7405C41.5527 44.6154 39.5313 46.1975 37.334 47.4573H30.2734C25.0587 44.4689 21.0157 39.6351 19.082 33.9514H19.0819H19.0234L18.7686 33.0692C18.724 32.9257 18.6825 32.7821 18.6442 32.6386L18.6426 32.6331C18.586 32.4407 18.5338 32.2483 18.4842 32.0558L18.2325 31.1389H18.2617C17.8808 29.3812 17.6758 27.6233 17.6758 25.8362V25.5139L17.6758 25.5139L17.6171 25.5432L17.7027 24.6597C17.7033 24.6526 17.704 24.6454 17.7047 24.6383L17.7051 24.635C17.7147 24.5005 17.7211 24.369 17.7275 24.2387C17.7406 23.9718 17.7535 23.7094 17.7928 23.4338C17.8055 23.282 17.8236 23.1358 17.8448 22.9927L17.9101 22.4378L17.9394 22.4378C18.3991 18.9437 19.5803 15.6301 21.4404 12.6525H21.2793L22.3587 11.2864C22.6046 10.9456 22.86 10.6098 23.1249 10.2795L23.5644 9.72283H23.6064C25.5496 7.40737 27.9653 5.4803 30.6793 3.9906Z"
                    fill="#5374E9"
                  />
                  <path
                    d="M34.3164 46.2268C28.0762 43.678 23.2714 38.2872 21.4551 31.8126C21.338 31.4026 21.2208 30.9631 21.1328 30.5529C20.7812 29.0002 20.6055 27.4181 20.6055 25.8361C20.6055 25.1329 20.6348 24.4592 20.7226 23.7559C21.1034 19.7129 22.5683 15.9043 25 12.6525L25.4396 12.0958C27.7246 9.22483 30.8007 6.91018 34.3164 5.44534L37.3047 4.21497C36.4843 3.71702 35.6054 3.27747 34.6973 2.89661C34.6973 2.89661 34.0819 2.66233 33.9941 2.63303C32.5293 2.04709 31.1231 1.53918 29.6583 1.27561L29.3945 1.21692L29.1308 1.27561C17.3829 3.50198 8.88672 13.8828 8.88672 25.8361C8.88672 37.7893 17.3829 48.1701 29.1308 50.3965L29.3945 50.4552L29.6583 50.3965C31.1231 50.1329 32.5293 49.6251 33.9941 49.0391C34.0819 49.0098 34.1992 48.9513 34.287 48.922L34.7852 48.7169C35.6641 48.3654 36.5136 47.9258 37.334 47.4572L34.3164 46.2268Z"
                    fill="#6C8DFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_567">
                    <rect
                      width="50"
                      height="50"
                      fill="white"
                      transform="translate(0 0.83606)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-[#245D51] text-xl leading-[36px] font-semibold">
              Video Quality
            </h3>
            <p className="text-[#808080] leading-[35px] text-md ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center md:text-left">
            <div className="p-4 rounded-md inline-block mb-4">
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_560)">
                  <path
                    d="M19.1406 13.3387L25 0.83601H40.9829L42.1502 13.3387H19.1406Z"
                    fill="#F8C67C"
                  />
                  <path
                    d="M7.84949 13.3387L9.01677 0.83601H24.9997V13.3387H7.84949Z"
                    fill="#F8C67C"
                  />
                  <path
                    d="M25 50.8361L19.1406 28.7657L25 6.69543H34.8576C36.6864 6.69543 38.4381 7.37366 39.79 8.6053C41.142 9.83694 41.9802 11.518 42.1501 13.3388L45.6509 50.8361H25Z"
                    fill="#F39321"
                  />
                  <path
                    d="M10.2098 8.6053C11.5618 7.37366 13.3134 6.69543 15.1422 6.69543H24.9999V50.8361H4.34888L7.84966 13.3388C8.01968 11.5179 8.85786 9.83684 10.2098 8.6053Z"
                    fill="#F3A141"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_560">
                    <rect
                      width="50"
                      height="50"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 50.8361)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-[#245D51] text-xl leading-[36px] font-semibold">
              High Price
            </h3>
            <p className="text-[#808080] leading-[35px] text-md ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyDoWeExistSection;
