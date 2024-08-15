import Image from "next/image";
import UserImage from "../../../public/assets/user.png";

const UXLandCard: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-2xl p-1 flex items-start justify-between  max-w-[280px]">
      <div className="flex-shrink-0">
        <Image
          src={UserImage}
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full mr-2"
        />
      </div>
      <div>
        <h2 className="text-sm font-semibold text-gray-800">
          Learn basic ui ux design
        </h2>
        <p className="text-xs font-thin text-gray-600">Today at 12 PM</p>

        <button className="bg-pink-500 text-xs text-white mt-2 py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default UXLandCard;
