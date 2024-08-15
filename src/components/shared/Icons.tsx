import { IIconPayload } from "@/common/common";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

// Array of icon payloads with proper types
export const iconsPayloads: IIconPayload[] = [
  { link: "#", name: "Instagram", icon: <FaInstagram /> },
  { link: "#", name: "Twitter", icon: <FaTwitter /> },
  { link: "#", name: "Discord", icon: <FaDiscord /> },
];

const Icons = ({ className }: any) => {
  return (
    <div className={className}>
      <ul className="flex space-x-4">
        {iconsPayloads.map((icon) => (
          <li key={icon.name} className="text-xl">
            <Link href={icon.link} passHref>
              {icon.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Icons;
