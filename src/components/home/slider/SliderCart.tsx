import ButtonComponent from "@/utilities/Button";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { HiMiniPlay } from "react-icons/hi2";

interface CarouselProps {
  courseTitle: string;
  instructor: {
    name: string;
    title: string;
  };
  participants: number;
  price: number;
  priceUnit: string;
  videoCount: number;
  buttonText: string;
  image: string;
}

const CarouselCart: React.FC<CarouselProps> = ({
  courseTitle,
  instructor,
  participants,
  price,
  priceUnit,
  videoCount,
  buttonText,
  image,
}) => {
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="max-w-sm mx-auto rounded-lg bg-white overflow-hidden">
      {/* Cart image part */}
      <div className="cart-image-wrap relative">
        <Image
          src={image}
          alt="cart"
          layout="responsive"
          width={350}
          height={350}
        />
        <div className="play-icon-wrap absolute inset-0 flex justify-center items-center">
          <div className="play-icons-box">
            <div className="play-icons-info">
              <HiMiniPlay className="icon text-[#245D51]" />
            </div>
          </div>
        </div>
      </div>

      {/* Cart article part */}
      <div className=" p-3">
        <article>
          <h2 className="text-xl font-semibold leading-8 text-gray-800">
            {courseTitle}
          </h2>

          <div className="flex xs:flex-col sm:flex-row items-center justify-between mt-3">
            <div className="flex justify-between items-center">
              <img src={image} alt="" className="w-10 h-10 rounded-full" />

              <div className="ml-3">
                <h5 className="font-semibold text-sm">{instructor?.name}</h5>
                <p className="font-thin text-xs">{instructor?.title}</p>
              </div>
            </div>
            <div className="mt-3 xs:mt-0 flex justify-between items-center">
              <AiOutlineUser className="w-10 h-10 rounded-full" />

              <div className="ml-3">
                <h5 className="font-semibold text-sm">{participants}</h5>
                <p className="font-thin text-xs">Participant </p>
              </div>
            </div>
          </div>

          {/* price */}
          <div className="flex items-center justify-between mt-3">
            <ButtonComponent fontSize="12" title="Buy Now" color="#245D51" />
            {/* <Modal
              closeModal={closeModal}
              openModal={openModal}
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              title="Basics of learning team management"
            /> */}
            <h3 className="text-xl font-semibold">
              ${price}{" "}
              <span className="text-xs font-extralight">
                /{videoCount} Video
              </span>
            </h3>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CarouselCart;
