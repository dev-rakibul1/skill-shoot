"use client";

import Image from "next/image";
import Dribble from "../../../../public/assets/brand/Dribble.png";
import Google from "../../../../public/assets/brand/Google.png";
import Microsoft from "../../../../public/assets/brand/Microsoft.png";
import Paypal from "../../../../public/assets/brand/Paypal.png";
import Uber from "../../../../public/assets/brand/Uber.png";

const BrandGroup = () => {
  return (
    <div className="flex justify-center items-center p-4 mt-12">
      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 gap-6 justify-center items-center">
        <li className="">
          <Image src={Uber} alt="Uber Logo" />
        </li>
        <li className="">
          <Image src={Google} alt="Google Logo" />
        </li>
        <li className="">
          <Image src={Paypal} alt="Paypal Logo" />
        </li>
        <li className="">
          <Image src={Microsoft} alt="Microsoft Logo" />
        </li>
        <li className="">
          <Image src={Dribble} alt="Dribble Logo" />
        </li>
      </ul>
    </div>
  );
};

export default BrandGroup;
