import BrandGroup from "./BrandGroup";

const Client = () => {
  return (
    <div className="theme-container mt-24 mx-auto">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-xl md:text-4xl font-semibold">
          Trusted more than <span className="text-[#F88C3D]">100+</span> in the
          world
        </h2>
        <p className="max-w-full md:w-[40%] text-center font-normal text-md">
          they have asked us more than 3 times to teach their employees about
          various things. to improve their skills
        </p>
      </div>
      <BrandGroup />
    </div>
  );
};

export default Client;
